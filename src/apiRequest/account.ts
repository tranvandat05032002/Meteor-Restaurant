import http from "@/lib/http";
import { AccountListResType, AccountResType, ChangePasswordBodyType, CreateEmployeeAccountBodyType, UpdateEmployeeAccountBodyType, UpdateMeBodyType } from "@/schemaValidations/account.schema";
import routeEndpoint from "./routes";

export const accountApiRequest = {
    me: () => http.get<AccountResType>(routeEndpoint.me),
    updateMe: (body: UpdateMeBodyType) => http.put<AccountResType>(routeEndpoint.updateMe, body),
    changePassword: (body: ChangePasswordBodyType) => http.put<AccountResType>(routeEndpoint.changePassword, body),
    list: () => http.get<AccountListResType>(routeEndpoint.list),
    addEmployee: (body: CreateEmployeeAccountBodyType) => http.post<AccountResType>(routeEndpoint.addEmployee, body),
    getEmployee: (id: number) => http.get<AccountResType>(routeEndpoint.getEmployee(id)),
    updateEmployee: (id: number, body: UpdateEmployeeAccountBodyType) => http.put<AccountResType>(routeEndpoint.updateEmployee(id), body),
    deleteEmployee: (id: number) => http.delete<AccountResType>(routeEndpoint.deleteEmployee(id))
}

export default accountApiRequest