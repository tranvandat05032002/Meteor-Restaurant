import { UpdateEmployeeAccountBodyType } from "@/schemaValidations/account.schema"

const mediaPrefix = '/media'
const accountPrefix = '/accounts'
const routeEndpoint = {
    // Auth
    serverLogin: `/auth/login`,
    login: `/api/auth/login`,
    serverLogout: `/auth/logout`,
    logout: `/api/auth/logout`,
    // Media
    upload: `${mediaPrefix}/upload`,
    // Payment
    createPayment: '/api/create-payment-intent',
    // Account
    me: `${accountPrefix}/me`,
    updateMe: `${accountPrefix}/me`,
    changePassword: `${accountPrefix}/change-password`,
    list: `${accountPrefix}`,
    addEmployee: `${accountPrefix}`,
    updateEmployee: (id: number) => `${accountPrefix}/detail/${id}`,
    getEmployee: (id: number) => `${accountPrefix}/detail/${id}`,
    deleteEmployee: (id: number) => `${accountPrefix}/detail/${id}`
} as const // readonly

export default routeEndpoint