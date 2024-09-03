import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { UseFormSetError } from 'react-hook-form'
import { EntityError } from "./http"
import { toast } from "@/components/ui/use-toast"
import { DishStatus, TableStatus } from "@/constants/type"
import envClientConfig from "@/configClient"
import jwt from "jsonwebtoken"
import { TokenPayload } from "@/types/jwt.types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}

export const handleErrorApi = ({
  error,
  setError,
  duration
}: {
  error: any;
  setError?: UseFormSetError<any>;
  duration?: number
}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item) => {
      setError(item.field, {
        type: 'server',
        message: item.message
      })
    })
  }
  else {
    toast({
      title: 'Lỗi',
      description: error?.payload?.message ?? 'Lỗi không xác định',
      variant: 'destructive',
      duration: duration ?? 5000
    })
  }
}

const isBrowser = typeof window !== 'undefined'

export const getAccessTokenFromLocalStorage = () => isBrowser ? localStorage.getItem('accessToken') : null
export const getRefreshTokenFromLocalStorage = () => isBrowser ? localStorage.getItem('refreshToken') : null
export const setAccessTokenLocalStorage = (value: string) =>
  isBrowser && localStorage.setItem('accessToken', value)
export const setRefreshTokenLocalStorage = (value: string) =>
  isBrowser && localStorage.setItem('refreshToken', value)
export const removeTokensFromLocalStorage = () => {
  isBrowser && localStorage.removeItem('accessToken')
  isBrowser && localStorage.removeItem('refreshToken')
}
export const getVietnameseDishStatus = (status: (typeof DishStatus)[keyof typeof DishStatus]) => {
  switch (status) {
    case DishStatus.Available:
      return 'Có sẵn'
    case DishStatus.Unavailable:
      return 'Không có sẵn'
    default:
      return 'Ẩn'
  }
}
export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(number)
}
export const getVietnameseTableStatus = (status: (typeof TableStatus)[keyof typeof TableStatus]) => {
  switch (status) {
    case TableStatus.Available:
      return 'Có sẵn'
    case TableStatus.Reserved:
      return 'Đã đặt'
    default:
      return 'Ẩn'
  }
}
export const getTableLink = ({ token, tableNumber }: { token: string; tableNumber: number }) => {
  return envClientConfig?.NEXT_PUBLIC_URL + '/tables/' + tableNumber + '?token=' + token
}
export const decodeToken = (token: string) => {
  return jwt.decode(token) as TokenPayload
}