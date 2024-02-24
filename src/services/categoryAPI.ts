import { get, post } from './fetch'

const token = localStorage.getItem('access_token')

export const getCategory = async ({ currentPage, searchText }) => {
    console.log('fetched')

    const res: any = await get(
        `http://localhost:8008/api/v1/category/?search=${
            searchText.length > 3 ? searchText : ''
        }&page=${currentPage}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
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
                Authorization: `Bearer ${token} `,
            },
        },
        true,
    )
    console.log('create Category: ', res.data)
    return res.data
}

export const uploadFile = async (newData: any) => {
    // console.log(newData)
    const res: any = await post(
        'http://localhost:8008/api/v1/file/upload/',
        newData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token} `,
            },
        },
        true,
    )
    // console.log('uploadFile ', res)
    return res
}

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzgxMDgwNDcsImlhdCI6MTcwMjEwODA0NywiaXNzIjoiZXJwIiwic3ViIjoiYjYwNjI5MzgtYzRkZS00OGFkLWI5NGYtZTk5NjFiMmNkMjNmIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiJ9.hP13q4bEc90K6b5YFL1o6T9dKrZPBqBUpWDv_hNCpgM
