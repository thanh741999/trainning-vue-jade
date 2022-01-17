import { ApiService } from '@/service/api.service'

const baseUrl = 'https://phanolink.herokuapp.com/api'

export function GetBanner () {
  return ApiService.get(`${baseUrl}/banners`).then((res) => res.data)
}
export function GetProduct () {
  return ApiService.get(`${baseUrl}/products?sale?`).then((resp) => resp.data)
}
