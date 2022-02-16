import { ApiService } from '@/service/api.service'

const baseUrl = 'https://phanolink.herokuapp.com/api'

export function GetCategory () {
  return ApiService.get(`${baseUrl}/categories`).then((res) => res.data)
}
export function GetProductList (id) {
  return ApiService.get(`${baseUrl}/products?&perPage=20&page=${id}`).then((res) => res.data)
}
export function GetProduct (id) {
  return ApiService.get(`${baseUrl}/products?category=${id}&perPage=20`).then((res) => res.data)
}
export function SortProduct (string) {
  return ApiService.get(`${baseUrl}/products?${string}&perPage=20`).then((res) => res.data)
}
export function GetProductPaginationSort (data) {
  return ApiService.get(`${baseUrl}/products?${data.string}&perPage=20&page=${data.id}`).then((res) => res.data)
}
export function GetProductSearch (string) {
  return ApiService.get(`${baseUrl}/products?perPage=20&search=${string}`).then((res) => res.data)
}
