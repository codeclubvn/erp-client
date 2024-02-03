import { get, post } from './fetch'
const token = localStorage.getItem('access_token')
export const getProducts = async () => {
    const res: any = await get('http://localhost:8008/api/v1/product/', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
        },
    })
    return res.data
}

export const createProduct = async (newData: any) => {
    const res: any = await post(
        'http://localhost:8008/api/v1/product/',
        newData,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
        true,
    )
    console.log('create product: ', res.data)
    return res.data
}
