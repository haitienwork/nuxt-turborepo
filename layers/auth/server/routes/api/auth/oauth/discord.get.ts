import { jwtDecode } from "jwt-decode";
import { DiscordErrorCode, AuthErrorCode } from "#shared/utils/enum";
import type { DecodedJWTUser } from "#shared/utils/type";

const REDIRECT_PATH = "/";
const SIGN_IN_PATH = "/sign-in";

export default defineEventHandler(async (event) => {
	const env = useRuntimeConfig().public;
	const apiEndpoint = env.apiEndpoint;

	const query = getQuery(event);
	const code = query.code as string; // Code from discord
	const error = query.error as string; // Error from discord

	const proto = event.headers.get("x-forwarded-proto"); // HTTP or HTTPS
	const host = event.headers.get("host"); // localhost:3000

	//#region Handle Error Discord
	if (error) {
		if (error === DiscordErrorCode.AccessDenied)
			return sendRedirect(event, SIGN_IN_PATH);

		return createError({
			status: 400,
			statusMessage: error,
		});
	}

	if (!code) {
		return sendRedirect(
			event,
			`${SIGN_IN_PATH}?error=${AuthErrorCode.NoCodeProvided}`,
		);
	}

	if (!host || !proto)
		return createError({
			statusCode: 400,
			statusMessage: AuthErrorCode.NoHostProvided,
		});
	//#endregion

	//#region Get JWT Token from Backend and set to cookie
	const redirect_url = new URL("/api/auth/discord", `${proto}://${host}`);

	const searchParams = new URLSearchParams();
	searchParams.set("code", code);
	searchParams.set("redirect_url", redirect_url.toString());

	const endpoint = `${apiEndpoint}/v1/auth/discord/callback?${searchParams.toString()}`;

	try {
		const res = await fetch(endpoint);

		if (!res.ok)
			return createError({
				status: 400,
				statusMessage: AuthErrorCode.FailedToConnectToServer,
			});

		const data = await res.json();

		if (!data.token)
			return createError({
				status: 400,
				statusMessage: AuthErrorCode.NoTokenReturn,
			});

		const decodedJWTUser = jwtDecode(data.token) as DecodedJWTUser;

		await setUserSession(event, {
			user: {
				user_id: decodedJWTUser.user_id,
				username: decodedJWTUser.username,
				role: decodedJWTUser.role,
				isLoaded: false,
			},
			token: data.token,
			loggedInAt: new Date(),
		});

		return sendRedirect(event, REDIRECT_PATH);
		//#endregion
	} catch (error) {
		await clearUserSession(event);

		if (error instanceof Error) {
			return createError({
				status: 400,
				statusMessage: error.message,
			});
		}
	}
});
