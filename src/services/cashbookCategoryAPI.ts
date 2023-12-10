import { get } from './fetch'

interface CashbookCategory {
    data: {
        id: number
        name: string
        type: string
    }
}

export const getCashbookCategories = async () => {
    const res: CashbookCategory = await get(
        'http://localhost:8008/api/v1/cashbook_category/',
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzgxMDgwNDcsImlhdCI6MTcwMjEwODA0NywiaXNzIjoiZXJwIiwic3ViIjoiYjYwNjI5MzgtYzRkZS00OGFkLWI5NGYtZTk5NjFiMmNkMjNmIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.hP13q4bEc90K6b5YFL1o6T9dKrZPBqBUpWDv_hNCpgM',
            },
        },
    )
    console.log('category: ', res.data)
    return res.data
}
