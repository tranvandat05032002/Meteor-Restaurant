import http from "@/lib/http";
import { AccountResType, ChangePasswordBodyType, UpdateMeBodyType } from "@/schemaValidations/account.schema";
import routeEndpoint from "./routes";

export const accountApiRequest = {
    me: () => http.get<AccountResType>(routeEndpoint.me),
    updateMe: (body: UpdateMeBodyType) => http.put<AccountResType>(routeEndpoint.updateMe, body),
    changePassword: (body: ChangePasswordBodyType) => http.put<AccountResType>(routeEndpoint.changePassword, body)
}

export default accountApiRequest