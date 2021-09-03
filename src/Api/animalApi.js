/* GET /products # Lấy ds products
GET /products?categoryId=123&page=1 # Lọc products với params
GET /products/:productId # Lấy product by ID
POST /products # Tạo một product mới
PATCH /products/:productId # Cập nhật product có ID là :productId
DELETE /products/:productId # Xoá product */

// api/productApi.js
import axiosClient from './axiosClient'
const animalApi = {
  getDetail: (id) => {
    const url = `/products/${id}`
    return axiosClient.get(url)
  },
  getMore: (start) => {
    const url = `/products?_start=${start}&_end=${start + 40}`
    return axiosClient.get(url)
  },
  getBySpecies: (id,paramsString) => {
    const url = `/categories/${id}/products?${paramsString}`
    return axiosClient.get(url)
  },
  getAllSpecies: () => {
    const url = `/categories`
    return axiosClient.get(url)
  },
  
}
export default animalApi
