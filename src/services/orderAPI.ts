import fecther from './fetcher'

export const getOrders = async () => {
    const res = await fecther.get('/seats')
    return res.data
}
