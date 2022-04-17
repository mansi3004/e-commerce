import axios from 'axios'

export async function GetProductsByCategory(category) {
    return axios({
        url: `https://fakestoreapi.com/products/category/${category}`,
        method: 'GET'
    })
} 