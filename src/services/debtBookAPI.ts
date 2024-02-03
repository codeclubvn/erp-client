import { get } from './fetch'

interface Debtbook {
    data: {
        id: number
        name: string
        type: string
    }
}
const token = localStorage.getItem('access_token')
export const getDebtbooks = async () => {
    const res: Debtbook = await get('http://localhost:8008/api/v1/debt/', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
        },
    })
    return res.data
}
