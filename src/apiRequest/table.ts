import http from "@/lib/http";
import routeEndpoint from "./routes";
import { CreateTableBodyType, TableListResType, TableResType, UpdateTableBodyType } from "@/schemaValidations/table.schema";

export const tableApiRequest = {
  list: () => http.get<TableListResType>(routeEndpoint.listTables),
  add: (body: CreateTableBodyType) => http.post<TableResType>(routeEndpoint.addTable, body),
  getTable: (id: number) => http.get<TableResType>(routeEndpoint.getTable(id)),
  updateTable: (id: number, body: UpdateTableBodyType) => http.put<TableResType>(routeEndpoint.updateTable(id), body),
  deleteTable: (id: number) => http.delete<TableResType>(routeEndpoint.deleteTable(id))
}