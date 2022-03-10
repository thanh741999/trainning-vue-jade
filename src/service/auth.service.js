import { ApiService } from "@/service/api.service";

const baseUrl = 'https://phanolink.herokuapp.com/api'

export function Register (data) {
    return ApiService.post(`${baseUrl}/register`, data).then((res) => res.data)
}
export function Login (data) {
    return ApiService.post(`${baseUrl}/login`,data).then((res) => res.data)
}
export function GetUserInfo() {
    return ApiService.get(`${baseUrl}/user/user-profile`).then((res) => res.data)
}
export function ChangeProfile(data) {
    return ApiService.patch(`${baseUrl}/user/change-profile`,data).then((res) => res.data)
}