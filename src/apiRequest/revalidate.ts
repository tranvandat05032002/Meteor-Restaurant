import http from "@/lib/http";

const apiRevalidateRequest = (tag: string) => http.get(`/api/revalidate?tag=${tag}`, {
    baseUrl: ''
})
export default apiRevalidateRequest