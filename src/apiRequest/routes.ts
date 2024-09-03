import { UpdateEmployeeAccountBodyType } from "@/schemaValidations/account.schema"

const mediaPrefix = '/media'
const accountPrefix = '/accounts'
const dishPrefix = '/dishes'
const tablePrefix = '/tables'
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
    deleteEmployee: (id: number) => `${accountPrefix}/detail/${id}`,
    //Dish
    listDish: `${dishPrefix}`,
    addDish: `${dishPrefix}`,
    getDish: (id: number) => `${dishPrefix}/${id}`,
    updateDish: (id: number) => `${dishPrefix}/${id}`,
    deleteDish: (id: number) => `${dishPrefix}/${id}`,
    // Tables
    listTables: `${tablePrefix}`,
    addTable: `${tablePrefix}`,
    getTable: (id: number) => `${tablePrefix}/${id}`,
    updateTable: (id: number) => `${tablePrefix}/${id}`,
    deleteTable: (id: number) => `${tablePrefix}/${id}`,
    // Guest
    guestLogin: '/api/guest/auth/login',
    guestServerLogin: '/guest/auth/login',
    guestLogout: '/api/guest/auth/logout',
    guestServerLogout: '/guest/auth/logout',
    guestRefreshToken: '/api/guest/auth/refresh-token',
    guestServerRefreshToken: '/guest/auth/refresh-token'
} as const // readonly

export default routeEndpoint