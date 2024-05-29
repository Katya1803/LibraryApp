export const oktaConfig = {
    clientId: '0oahdljizzf3IUNjY5d7',
    issuer: 'https://dev-92641996.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}