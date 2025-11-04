# Auth Layer

A Nuxt layer that provides authentication utilities, logic, and API endpoints for your Nuxt application.

## Features

- 🔐 **Credential-based Authentication** - Username/password login
- 🎮 **OAuth Integration** - Discord OAuth2 support
- 🔑 **Session Management** - Built on `nuxt-auth-utils`
- 📦 **Type-safe** - Full TypeScript support
- 🛠️ **Extensible** - Easy to customize and extend

## OAuth Providers Included

- **Discord OAuth2** - Full Discord OAuth2 implementation with configurable scopes

## Installation

### 1. Extend the Layer

Add the auth layer to your Nuxt app's `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ['../layers/auth'],
})
```

### 2. Environment Variables

Configure the following environment variables:

```env
# Required for Discord OAuth
NUXT_PUBLIC_DISCORD_CLIENT_ID=your_discord_client_id
NUXT_PUBLIC_API_ENDPOINT=your_api_endpoint

# Required for session encryption
NUXT_SESSION_PASSWORD=your_secure_session_password
```

## Usage

### Auth Utils

The layer provides utility functions for authentication operations:

#### Get User Info

```typescript
import { getMeInfo } from '@/utils/auth'

const userInfo = await getMeInfo()
```

#### Login with Credentials

```typescript
import { loginWithCredential } from '@/utils/auth'

const result = await loginWithCredential('username', 'password')
// Returns: { success: boolean }
```

#### Logout

```typescript
import { logout } from '@/utils/auth'

const result = await logout()
// Returns: { success: boolean }
```

#### Discord OAuth2

Generate a Discord OAuth2 URL with custom scopes:

```typescript
import { getDiscordOAuth2Url } from '@/utils/auth'
import { DiscordOAuthScope } from '#shared/utils/enum'

// Generate OAuth URL with specific scopes
const oauthUrl = await getDiscordOAuth2Url([
  DiscordOAuthScope.Identify,
  DiscordOAuthScope.Email,
  DiscordOAuthScope.Guilds,
])

// Redirect user to OAuth URL
window.location.href = oauthUrl
```

Available Discord OAuth scopes are defined in `DiscordOAuthScope` enum.

### API Endpoints

The layer automatically provides the following API routes:

#### POST `/api/auth/credential`

Login with username and password.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true
}
```

#### POST `/api/auth/logout`

Logout the current user and clear session.

**Response:**
```json
{
  "success": true
}
```

#### GET `/api/auth/oauth/discord`

Discord OAuth2 callback handler. Automatically processes the OAuth code and sets up the user session.

#### GET `/api/me`

Get current authenticated user information. This endpoint includes caching (30 minutes) to reduce API calls.

**Query Parameters:**
- `clear=true` - Force refresh cached user data

**Response:**
```json
{
  "user": {
    // User data from your API
  }
}
```

### Types & Enums

The layer exports useful types and enums:

#### User Roles

```typescript
import { EnumUserRole } from '#shared/utils/enum'
```

#### Auth Error Codes

```typescript
import { AuthErrorCode } from '#shared/utils/enum'
// ... and more
```

#### Discord Error Codes

```typescript
import { DiscordErrorCode } from '#shared/utils/enum'
// ... and more
```

## Extending the Layer

### Custom Authentication Logic

To implement your own authentication provider:

1. Create a new API route in your app's `server/routes/api/auth/` directory
2. Use `setUserSession()` from `nuxt-auth-utils` to set the user session
3. Create corresponding utility functions in your app's utils directory

Example structure:
```typescript
// server/routes/api/auth/custom.post.ts
export default defineEventHandler(async (event) => {
  // Your custom auth logic here
  
  await setUserSession(event, {
    user: {
      user_id: "123",
      username: "user",
      role: "member",
      isLoaded: false,
    },
    token: "jwt_token",
    loggedInAt: new Date(),
  })
  
  return { success: true }
})
```

### Customizing User Session

The session structure uses the following interface:

```typescript
{
  user: {
    user_id: string
    username: string
    role: string
    isLoaded: boolean
    // Add your custom fields here
  },
  token: string,
  loggedInAt: Date
}
```

You can extend the `UserInfoMe` type in `shared/utils/type.ts` to add more user fields.

## Session Management

The layer uses `nuxt-auth-utils` for session management, which provides:

- Secure encrypted sessions
- Server-side session storage
- Easy session manipulation with `getUserSession()`, `setUserSession()`, and `clearUserSession()`

Sessions are automatically handled by the layer's API endpoints.

## Notes

- The `/api/me` endpoint caches user data for 30 minutes to reduce API calls
- Discord OAuth requires proper redirect URI configuration in your Discord Developer Portal
- The credential login endpoint is a placeholder - implement your own backend API integration
- All auth utilities are auto-imported and available throughout your Nuxt app

## Dependencies

- `nuxt-auth-utils` - Session management
- `@repo/utils` - Shared utilities layer

## License

MIT

