import { post } from './fetch'
const token = localStorage.getItem('access_token')
export const resetPasswordApi = async (newData: any) => {
    console.log(newData)
    const res: any = await post(
        'http://localhost:8008/api/v1/auth/reset_password',
        newData,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
        true,
    )
    console.log('resetPasswordApi: ', res)
    return res
}
