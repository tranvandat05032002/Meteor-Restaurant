import authApiRequest from "@/apiRequest/auth"
import { HttpError } from "@/lib/http"
import { LoginBodyType } from "@/schemaValidations/auth.schema"
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'

export async function POST(request: Request) {
    const body = (await request.json()) as LoginBodyType
    const cookieStore = cookies()
    try {
        const { payload } = await authApiRequest.serverLogin(body)
        const { accessToken, refreshToken } = payload.data
        const decodedAccessToken = jwt.decode(accessToken) as { exp: number }
        const decodedRefreshToken = jwt.decode(refreshToken) as { exp: number }

        cookieStore.set('accessToken', accessToken, {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            expires: decodedAccessToken.exp * 1000
        })
        cookieStore.set('refreshToken', refreshToken, {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            expires: decodedRefreshToken.exp * 1000
        })
        return Response.json(payload)
    } catch (error) {
        if (error instanceof HttpError) {
            return Response.json(error.payload, {
                status: error.status
            })
        }
        else {
            Response.json({
                message: 'Có lỗi xảy ra'
            }, {
                status: 500
            })
        }
    }
}