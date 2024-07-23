import http from "@/lib/http";
import { LoginBodyType, LoginResType, LogoutBodyType } from "@/schemaValidations/auth.schema";
const endpoint = {
    serverLoginEndpoint: '/auth/login',
    loginEndPoint: '/api/auth/login',
    serverLogoutEndpoint: '/auth/logout',
    logoutEndpoint: '/api/auth/logout'
}
const authApiRequest = {
    serverLogin: (body: LoginBodyType) => http.post<LoginResType>(endpoint.serverLoginEndpoint, body),
    login: (body: LoginBodyType) => http.post<LoginResType>(endpoint.loginEndPoint, body, {
        baseUrl: ''
    }),
    sLogout: (body: LogoutBodyType & {
        accessToken: string
    }) => http.post(endpoint.serverLogoutEndpoint, {
        refreshToken: body.refreshToken
    }, {
        headers: {
            Authorization: `Bearer ${body.accessToken}`
        }
    }),
    logout: () => http.post(endpoint.logoutEndpoint, null, {
        baseUrl: ''
    })
}
export default authApiRequest