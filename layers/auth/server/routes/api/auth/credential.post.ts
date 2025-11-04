export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const payload = JSON.parse(body);

	if (!payload.username && !payload.password)
		return createError({
			statusCode: 400,
			statusMessage: AuthErrorCode.NoUsernameOrPasswordProvided,
		});

	// TODO: Call API to get JWT Token and set back to cookie

	try {
		await setUserSession(event, {
			user: {
				user_id: "123",
				username: "test",
				role: "admin",
				isLoaded: false,
			},
			token: "test",
			loggedInAt: new Date(),
		});

		return {
			success: true,
		};
	} catch (error) {
		if (error instanceof Error) {
			return createError({
				status: 400,
				statusMessage: error.message,
			});
		}

		return createError({
			status: 400,
			statusMessage: "Bad request",
		});
	}
});
