import { get } from './fetch'
const token = localStorage.getItem('access_token')

export const getCashbookCategories = async () => {
    const res: any = await get(
        'http://localhost:8008/api/v1/cashbook_category/',
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
    )
    return res.data
}
