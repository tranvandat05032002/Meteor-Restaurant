'use client'
import { decodeToken, getAccessTokenFromLocalStorage, removeTokensFromLocalStorage } from '@/lib/utils'
import { RoleType } from '@/types/jwt.types'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
})
const AppContext = React.createContext({
    isAuth: false,
    role: undefined as RoleType | undefined,
    setRole: (role?: RoleType | undefined) => { }
})
export const useAppContext = () => {
    return React.useContext(AppContext)
}
export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [role, setRoleState] = React.useState<RoleType | undefined>()
    React.useEffect(() => {
        const accessToken = getAccessTokenFromLocalStorage()
        if (accessToken) {
            const role = decodeToken(accessToken).role as RoleType
            setRoleState(role)
        }
    }, [])
    const setRole = React.useCallback((role?: RoleType | undefined) => {
        setRoleState(role)
        if (!role) {
            removeTokensFromLocalStorage()
        }
    }, [])
    const isAuth = Boolean(role)
    return (
        <AppContext.Provider value={{ role, setRole, isAuth }}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AppContext.Provider>
    )
}