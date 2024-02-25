import { post } from './fetch'
const token = localStorage.getItem('access_token')
export const forgotPasswordApi = async (newData: any) => {
    const res: any = await post(
        'http://localhost:8008/api/v1/auth/forgot_password',
        newData,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
        true,
    )
    console.log('forgotPasswordApi: ', res)
    return res
}
