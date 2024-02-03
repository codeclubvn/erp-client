import { del, get, post, put } from './fetch'

interface Customer {
    data: {
        id: number
        name: string
        type: string
    }
}
const token = localStorage.getItem('access_token')
export const getCustomers = async () => {
    console.log(token)
    const res: Customer = await get('http://localhost:8008/api/v1/customer/', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
        },
    })

    return res.data
}
export const getCustomersOne = async (id) => {
    const res: Customer = await get(
        `http://localhost:8008/api/v1/customer/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `,
            },
        },
    )

    return res.data
}

export const CreateCustomers = async (newData: any) => {
    const res: any = post(
        'http://localhost:8008/api/v1/customer/',
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
export const DelCustomers = async (id) => {
    const res: any = del(`http://localhost:8008/api/v1/customer/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
        },
    })
    return res.data
}

export const putCustomer = async (updatedData: any) => {
    console.log('xong')
    const res: any = put(
        `http://localhost:8008/api/v1/customer/`,
        updatedData,
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
