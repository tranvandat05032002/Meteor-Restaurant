import http from "@/lib/http";
import { GuestLoginBodyType, GuestLoginResType } from "@/schemaValidations/guest.schema";
import routeEndpoint from "./routes";
import { LogoutBodyType, RefreshTokenBodyType, RefreshTokenResType } from "@/schemaValidations/auth.schema";

const guestApiRequest = {
    refreshTokenRequest: null as Promise<{
        status: number,
        payload: RefreshTokenResType
    }> | null,
    sLogin: (body: GuestLoginBodyType) => http.post<GuestLoginResType>(routeEndpoint.guestServerLogin, body),
    login: (body: GuestLoginBodyType) => http.post<GuestLoginResType>(routeEndpoint.guestLogin, body, {
        baseUrl: ''
    }),
    sLogout: (body: LogoutBodyType & {
        accessToken: string
    }) => http.post(routeEndpoint.guestServerLogout, {
        refreshToken: body.refreshToken
    }, {
        headers: {
            Authorization: `Bearer ${body.accessToken}`
        }
    }),
    logout: () => http.post(routeEndpoint.guestLogout, null, {
        baseUrl: ''
    }),
    sRefreshToken: (body: RefreshTokenBodyType) => http.post<RefreshTokenResType>(routeEndpoint.guestServerRefreshToken, body),
    async refreshToken() {
        if (this.refreshTokenRequest) {
            return this.refreshTokenRequest
        }
        this.refreshTokenRequest = http.post<RefreshTokenResType>(routeEndpoint.guestRefreshToken, null, {
            baseUrl: ''
        })
        const result = await this.refreshTokenRequest
        this.refreshTokenRequest = null
        return result
    }
}
export default guestApiRequest