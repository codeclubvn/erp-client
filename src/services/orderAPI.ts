import fecther from './fetcher'

export const getOrders = async () => {
    const res = await fecther.get('/orders')
    return res.data
}
