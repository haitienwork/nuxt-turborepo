import type { UserInfoMe } from "#shared/utils/type";

// Cache info me for 30min

const CACHE_TIME = 30;

export default defineEventHandler(async (event) => {
	const env = useRuntimeConfig().public;
	const apiEndpoint = env.apiEndpoint;

	const query = getQuery(event);
	const session = await getUserSession(event);
	const token = session.token;
	const userId = session.user?.user_id;
	let isUserFetched = session.user?.isLoaded;
	if (query.clear === "true") {
		isUserFetched = false;
	}

	// Cache info me for 30min
	if (isUserFetched && session.loggedInAt) {
		const now = new Date();
		const loggedInAt = new Date(session.loggedInAt) as Date;

		const differenceInMilliseconds: number =
			now.getTime() - loggedInAt.getTime();
		const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

		if (differenceInMinutes <= CACHE_TIME) {
			return { message: true };
		}
	}

	if (!token || !userId)
		return createError({
			status: 401,
			statusMessage: "Unauthorize",
		});

	const endpoint = `${apiEndpoint}/v1/user/${userId}`;

	try {
		const res = await fetch(endpoint, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data: { user: UserInfoMe } = await res.json();

		await setUserSession(event, {
			user: {
				...session.user,
				...data.user,
				isLoaded: true,
			},
			loggedInAt: new Date(),
			token,
		});

		return data;
	} catch (error) {
		if (error instanceof Error) {
			return createError({
				status: 400,
				statusMessage: error.message,
				stack: error.stack,
			});
		}

		return createError({
			status: 400,
			statusMessage: "Bad request",
			stack: "Error",
		});
	}
});
