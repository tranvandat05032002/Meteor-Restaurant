import { mediaApiRequest } from "@/apiRequest/media"
import { useMutation } from "@tanstack/react-query"

export const useUploadMutation = () => {
    return useMutation({
        mutationFn: mediaApiRequest.upload
    })
}