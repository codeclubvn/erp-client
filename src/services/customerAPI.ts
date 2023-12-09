import fecther from './fetcher'

export const getCustomers = async () => {
    const res = await fecther.get('/customers')
    return res.data
}
