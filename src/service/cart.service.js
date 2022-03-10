import {ApiService} from "@/service/api.service";
import da from "element-ui/src/locale/lang/da";

const baseUrl = ''

export function CreateOder(data) {
   return ApiService.post(`${baseUrl}/user/orders`,data).then((res) => res.data)
}

export function GetOderList(data) {
   return ApiService.get(`${baseUrl}/user/orders?with=${data.product}&perPage=${data.perpage}`).then((res) => res.data)
}

export function GetOderDetail(data) {
   return ApiService.get(`${baseUrl}/user/orders/${data.id}?with=${data.product}`)
}