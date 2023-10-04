import axios from 'axios'

const fecther = axios.create({
    baseURL: 'https://62f50939535c0c50e76847d8.mockapi.io',
})

export default fecther
export const url = axios.create({
    baseURL: 'https://6512e551b8c6ce52b3967188.mockapi.io',
})
