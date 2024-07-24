import http from "@/lib/http";
import { AccountResType } from "@/schemaValidations/account.schema";
import routeEndpoint from "./routes";

export const accountApiRequest = {
    me: () => http.get<AccountResType>(routeEndpoint.me)
}

export default accountApiRequest