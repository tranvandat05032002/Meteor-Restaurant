import convertToSubcurrency from "@/lib/convertToSubcurrency";
import http from "@/lib/http";

export const apiPaymentRequest = {
    createPaymentIntentNextServer: (amount: number) => http.post('api/create-payment-intent', JSON.stringify({ amount: convertToSubcurrency(amount) }), {
        baseUrl: ''
    })
}