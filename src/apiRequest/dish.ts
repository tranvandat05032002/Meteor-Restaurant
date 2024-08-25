import http from "@/lib/http";
import { CreateDishBodyType, DishListResType, DishResType, UpdateDishBodyType } from "@/schemaValidations/dish.schema";
import routeEndpoint from "./routes";

export const dishApiRequest = {
  list: () => http.get<DishListResType>(routeEndpoint.listDish, { next: { tags: ["dishes"] } }),
  add: (body: CreateDishBodyType) => http.post<DishResType>(routeEndpoint.addDish, body),
  getDish: (id: number) => http.get<DishResType>(routeEndpoint.getDish(id)),
  updateDish: (id: number, body: UpdateDishBodyType) => http.put<DishResType>(routeEndpoint.updateDish(id), body),
  deleteDish: (id: number) => http.delete<DishResType>(routeEndpoint.deleteDish(id))
}