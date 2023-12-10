import { get } from './fetch'
export const getOrders = async () => {
    const res = await get('http://localhost:8008/api/v1/order/', {
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzgxMDgwNDcsImlhdCI6MTcwMjEwODA0NywiaXNzIjoiZXJwIiwic3ViIjoiYjYwNjI5MzgtYzRkZS00OGFkLWI5NGYtZTk5NjFiMmNkMjNmIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.hP13q4bEc90K6b5YFL1o6T9dKrZPBqBUpWDv_hNCpgM',
        },
    })
    console.log('order: ', res.data)
    return res.data
}
