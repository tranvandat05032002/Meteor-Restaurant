import http from "@/lib/http";
import { LoginBodyType, LoginResType, LogoutBodyType } from "@/schemaValidations/auth.schema";
import routeEndpoint from "./routes";
const authApiRequest = {
    serverLogin: (body: LoginBodyType) => http.post<LoginResType>(routeEndpoint.serverLogin, body),
    login: (body: LoginBodyType) => http.post<LoginResType>(routeEndpoint.login, body, {
        baseUrl: ''
    }),
    sLogout: (body: LogoutBodyType & {
        accessToken: string
    }) => http.post(routeEndpoint.serverLogout, {
        refreshToken: body.refreshToken
    }, {
        headers: {
            Authorization: `Bearer ${body.accessToken}`
        }
    }),
    logout: () => http.post(routeEndpoint.logout, null, {
        baseUrl: ''
    })
}
export default authApiRequest