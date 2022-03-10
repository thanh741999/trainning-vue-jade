import { ApiService } from '@/service/api.service'

const baseUrl = ''

export function GetBanner () {
  return ApiService.get(`${baseUrl}/banners`).then((res) => res.data)
}
export function GetProduct () {
  return ApiService.get(`${baseUrl}/products?sale?`).then((res) => res.data)
}
export function GetFeatureProduct () {
  return ApiService.get(`${baseUrl}/products?feature?`).then((res) => res.data)
}
export function GetProductByCategoryId (id) {
  return ApiService.get(`${baseUrl}/products?category=${id}`).then((res) => res.data)
}
