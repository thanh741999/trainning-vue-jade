import { ApiService } from '@/service/api.service'

const baseUrl = 'https://phanolink.herokuapp.com/api'

export function GetProductDetail (id) {
  return ApiService.get(`${baseUrl}/products/${id}`).then((res) => res.data)
}
