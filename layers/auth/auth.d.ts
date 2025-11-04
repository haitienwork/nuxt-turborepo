declare module "#auth-utils" {
	interface User extends UserInfoMe {
		user_id: string;
		isLoaded: boolean;
	}

	interface UserSession {
		user: User;
		token: string;
		loggedInAt: number;
	}
}

export {};
