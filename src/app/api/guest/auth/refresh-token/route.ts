import jwt from 'jsonwebtoken';
import guestApiRequest from "@/apiRequest/guest";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')?.value
    if (!refreshToken) {
        Response.json({
            message: "Không tìm thấy refresh token"
        }, {
            status: 401
        })
    }
    try {
        const { payload } = await guestApiRequest.sRefreshToken({
            refreshToken: refreshToken!
        })
        const newAccessToken = payload.data.accessToken
        const newRefreshToken = payload.data.refreshToken
        const decodedAccessToken = jwt.decode(newAccessToken) as {
            exp: number
        }
        const decodedRefreshToken = jwt.decode(newRefreshToken) as {
            exp: number
        }
        cookieStore.set('accessToken', newAccessToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            expires: decodedAccessToken.exp * 1000
        })
        cookieStore.set('refreshToken', newRefreshToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            expires: decodedAccessToken.exp * 1000
        })
        return Response.json(payload)
    } catch (error: any) {
        console.log(error)
        return Response.json({
            message: error.message ?? "Có lỗi xảy ra"
        }, {
            status: 401
        })
    }
}