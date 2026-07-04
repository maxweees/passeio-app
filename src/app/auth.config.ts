import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '3069270048-gu4827mmnsfcraprd4vdf9skqpci3v49.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}