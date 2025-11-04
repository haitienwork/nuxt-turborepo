export enum EnumUserRole {
	BOD = "bod",
	Member = "member",
	Leader = "leader",
	Viewer = "viewer",
	Hidden = "hidden",
	Accounting = "accounting",
}

export enum AuthErrorCode {
	NoUsernameOrPasswordProvided = "no_username_or_password_provided",
	NoCodeProvided = "no_code_provided",
	NoHostProvided = "no_host_provided",
	FailedToConnectToServer = "failed_to_connect_to_server",
	NoTokenReturn = "no_token_return",
	InvalidUsernameOrPassword = "invalid_username_or_password",
	FailedToLogin = "failed_to_login",
}

export enum DiscordErrorCode {
	AccessDenied = "access_denied",
	InvalidGrant = "invalid_grant",
	InvalidRequest = "invalid_request",
	InvalidScope = "invalid_scope",
	InvalidClient = "invalid_client",
	InvalidClientSecret = "invalid_client_secret",
	InvalidClientId = "invalid_client_id",
	InvalidClientRedirectUri = "invalid_client_redirect_uri",
}

/**
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 *
 * @enum {string}
 * @readonly
 * @enumMember
 * @memberof DiscordOAuthScope
 * @property {string} ActivitiesRead - Read activities
 * @property {string} ActivitiesWrite - Write activities
 * @property {string} ApplicationsBuildsRead - Read applications builds
 * @property {string} ApplicationsBuildsUpload - Upload applications builds
 * @property {string} ApplicationsCommands - Read applications commands
 * @property {string} ApplicationsCommandsUpdate - Update applications commands
 * @property {string} ApplicationsCommandsPermissionsUpdate - Update applications commands permissions
 * @property {string} ApplicationsEntitlements - Read applications entitlements
 * @property {string} ApplicationsStoreUpdate - Update applications store
 * @property {string} Bot - Use bot
 * @property {string} Connections - Read connections
 * @property {string} DmChannelsRead - Read dm channels
 * @property {string} Email - Read email
 * @property {string} Gdm_Join - Join gdm
 * @property {string} Guilds - Read guilds
 * @property {string} GuildsJoin - Join guilds
 * @property {string} GuildsMembersRead - Read guilds members
 * @property {string} Identify - Read identify
 * @property {string} MessagesRead - Read messages
 * @property {string} RelationshipsRead - Read relationships
 * @property {string} RoleConnectionsWrite - Write role connections
 * @property {string} Rpc - Use rpc
 * @property {string} RpcActivitiesWrite - Write rpc activities
 * @property {string} RpcNotificationsRead - Read rpc notifications
 * @property {string} RpcVoiceRead - Read rpc voice
 * @property {string} RpcVoiceWrite - Write rpc voice
 * @property {string} Voice - Use voice
 * @property {string} WebhookIncoming - Read webhook incoming
 */
export enum DiscordOAuthScope {
	ActivitiesRead = "activities.read",
	ActivitiesWrite = "activities.write",
	ApplicationsBuildsRead = "applications.builds.read",
	ApplicationsBuildsUpload = "applications.builds.upload",
	ApplicationsCommands = "applications.commands",
	ApplicationsCommandsUpdate = "applications.commands.update",
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
	ApplicationsEntitlements = "applications.entitlements",
	ApplicationsStoreUpdate = "applications.store.update",
	Bot = "bot",
	Connections = "connections",
	DmChannelsRead = "dm_channels.read",
	Email = "email",
	Gdm_Join = "gdm.join",
	Guilds = "guilds",
	GuildsJoin = "guilds.join",
	GuildsMembersRead = "guilds.members.read",
	Identify = "identify",
	MessagesRead = "messages.read",
	RelationshipsRead = "relationships.read",
	RoleConnectionsWrite = "role_connections.write",
	Rpc = "rpc",
	RpcActivitiesWrite = "rpc.activities.write",
	RpcNotificationsRead = "rpc.notifications.read",
	RpcVoiceRead = "rpc.voice.read",
	RpcVoiceWrite = "rpc.voice.write",
	Voice = "voice",
	WebhookIncoming = "webhook.incoming",
}
