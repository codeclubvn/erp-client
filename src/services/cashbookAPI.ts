import { get, post } from './fetch'

const token = localStorage.getItem('access_token')
export const getCashbooks = async () => {
    const res: any = await get('http://localhost:8008/api/v1/cashbook/', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
        },
    })
    return res.data
}

export const createCashbook = async (newData: any) => {
    const res: any = await post(
        'http://localhost:8008/api/v1/cashbook/',
        newData,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
        true,
    )
    return res.data
}
