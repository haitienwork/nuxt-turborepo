import type { EnumUserRole } from "./enum";

export type UserInfoMe = {
	user_id: string;
	// your custom fields here
};

export interface DecodedJWTUser {
	exp: number;
	iat: number;
	user_id: number;
	role: EnumUserRole;
	username: string;
}
