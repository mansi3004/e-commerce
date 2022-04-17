import axios from 'axios'

export async function GetProducts() {
    return axios({
        url: "https://fakestoreapi.com/products",
        method: 'GET'
    })
} 