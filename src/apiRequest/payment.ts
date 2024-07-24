import convertToSubcurrency from "@/lib/convertToSubcurrency";
import http from "@/lib/http";
import routeEndpoint from "./routes";

export const apiPaymentRequest = {
    createPaymentIntentNextServer: (amount: number) => http.post(routeEndpoint.createPayment, JSON.stringify({ amount: convertToSubcurrency(amount) }), {
        baseUrl: ''
    })
}