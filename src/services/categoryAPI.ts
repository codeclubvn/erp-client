import { get, post } from './fetch'

export const getCategory = async ({ currentPage, searchText }) => {
    console.log('fetched')

    const res: any = await get(
        `http://localhost:8008/api/v1/category/?page=${currentPage}&search=${searchText}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDA4ODU3MTIsImlhdCI6MTcwNDg4NTcxMiwiaXNzIjoiZXJwIiwic3ViIjoiMjliYTVmZjgtYjI3Yy00YmNlLWJhYTAtYjg5ZGYyNTY3OTMxIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.33E148-317NNyZe0xIjDWga0F2QGeDqao7Q92NP2TZI',
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDA4ODU3MTIsImlhdCI6MTcwNDg4NTcxMiwiaXNzIjoiZXJwIiwic3ViIjoiMjliYTVmZjgtYjI3Yy00YmNlLWJhYTAtYjg5ZGYyNTY3OTMxIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.33E148-317NNyZe0xIjDWga0F2QGeDqao7Q92NP2TZI',
            },

            // mode: 'no-cors', // Set the request's mode to 'no-cors'
        },
    )
    return res
}

export const createCategory = async (newData: any) => {
    const res: any = await post(
        'http://localhost:8008/api/v1/category/',
        newData,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDA2OTk1NTgsImlhdCI6MTcwNDY5OTU1OCwiaXNzIjoiZXJwIiwic3ViIjoiMDM0ODE5YTAtNDU4My00MDE4LTk2MDEtYTQ3ODMwNjM3MjNiIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.66fflqTVDu1bUgjScHz8Jz19u5MUkeLNi7iOy3aJEG0',
            },
        },
        true,
    )
    console.log('create Category: ', res.data)
    return res.data
}
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzgxMDgwNDcsImlhdCI6MTcwMjEwODA0NywiaXNzIjoiZXJwIiwic3ViIjoiYjYwNjI5MzgtYzRkZS00OGFkLWI5NGYtZTk5NjFiMmNkMjNmIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.hP13q4bEc90K6b5YFL1o6T9dKrZPBqBUpWDv_hNCpgM
