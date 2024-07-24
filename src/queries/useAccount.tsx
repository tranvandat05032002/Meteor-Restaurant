import accountApiRequest from "@/apiRequest/account"
import { AccountResType } from "@/schemaValidations/account.schema"
import { useQuery } from "@tanstack/react-query"

export const useAccountProfile = (onSuccess?: (data: AccountResType) => void) => {
    // Nếu như khi thành công và muốn gọi một function nào đấy hoặc thực hiện gì đấy.
    // return useQuery({
    //     queryKey: ['account-profile'],
    //     queryFn: () => accountApiRequest.me().then((res) => {
    //         console.log("res: ", res)
    //         onSuccess && onSuccess(res.payload)
    //         return res
    //     })
    // })
    return useQuery({
        queryKey: ['account-profile'],
        queryFn: accountApiRequest.me
    })
}