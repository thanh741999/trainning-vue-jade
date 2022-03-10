import { ApiService } from '@/service/api.service'

const baseUrl = ''

export function GetProductDetail (id) {
  return ApiService.get(`${baseUrl}/products/${id}`).then((res) => res.data)
}

export function AddProductLike (id) {
  return ApiService.post(`${baseUrl}/user/favorites`,id).then((res) => res.data)
}

export function GetProductLike (product) {
  return ApiService.get(`${baseUrl}/user/favorites?with=${product.product}`)
}

export function DeleteProductLike (id) {
  return ApiService.delete(`${baseUrl}/user/favorites/${id}`).then((res) => res.data)
}
