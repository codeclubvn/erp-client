import { get, post } from './fetch'
const token = localStorage.getItem('access_token')
export const getOrders = async () => {
    const res: any = await get('http://localhost:8008/api/v1/order/', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
        },
    })
    return res.data
}

export const createOrder = async (newData: any) => {
    const res: any = await post(
        'http://localhost:8008/api/v1/order/',
        newData,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
    )

    if (!res.data) {
        throw new Error(res.message)
    }

    return res.data
}
