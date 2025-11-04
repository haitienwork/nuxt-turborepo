import type { DiscordOAuthScope } from "~~/shared/utils/enum";

export const getMeInfo = async () => {
	const data = await $fetch<UserInfoMe>("/api/me");
	return data;
};

export const logout = async () => {
	const data = await $fetch<{ success: boolean }>("/api/auth/logout");
	return data;
};

export const loginWithCredential = async (
	username: string,
	password: string,
) => {
	const data = await $fetch<{ success: boolean }>("/api/auth/credential", {
		method: "POST",
		body: { username, password },
	});
	return data;
};

export const getDiscordOAuth2Url = (
	scopes: DiscordOAuthScope[],
	redirectUri?: string,
) => {
	const discordClientId = useRuntimeConfig().public.discordClientId;

	const discordAuthUrl = new URL("https://discord.com/api/oauth2/authorize");

	const redirect_uri =
		redirectUri || `${window.location.origin}/api/auth/oauth/discord`;
	discordAuthUrl.searchParams.set("client_id", discordClientId);
	discordAuthUrl.searchParams.set("redirect_uri", redirect_uri);
	discordAuthUrl.searchParams.set("response_type", "code");
	discordAuthUrl.searchParams.set("scope", scopes.join("%20"));

	return discordAuthUrl.toString();
};
