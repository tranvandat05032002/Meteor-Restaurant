import http from "@/lib/http";
import routeEndpoint from "./routes";
import { UploadImageResType } from "@/schemaValidations/media.schema";

export const mediaApiRequest = {
    upload: (formData: FormData) => http.post<UploadImageResType>(routeEndpoint.upload, formData)
}