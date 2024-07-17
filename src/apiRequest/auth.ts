import http from "@/lib/http";
import { LoginBodyType, LoginResType } from "@/schemaValidations/auth.schema";
const endpoint = {
    serverLoginEndpoint: '/auth/login',
    loginEndPoint: '/api/auth/login'
}
const authApiRequest = {
    serverLogin: (body: LoginBodyType) => http.post<LoginResType>(endpoint.serverLoginEndpoint, body),
    login: (body: LoginBodyType) => http.post<LoginResType>(endpoint.loginEndPoint, body)
}
export default authApiRequest