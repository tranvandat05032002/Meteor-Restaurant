const routeEndpoint = {
    // Auth
    serverLogin: '/auth/login',
    login: '/api/auth/login',
    serverLogout: '/auth/logout',
    logout: '/api/auth/logout',
    // Media
    upload: '/media/upload',
    // Payment
    createPayment: '/api/create-payment-intent',
    // Account
    me: '/accounts/me',
    updateMe: '/accounts/me',
    changePassword: '/accounts/change-password',


} as const // readonly

export default routeEndpoint