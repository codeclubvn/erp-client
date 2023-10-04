import fecther, { url } from './fetcher'
export const getOrders = async () => {
    const res = await fecther.get('/seats')
    return res.data
}
export const getProducts = async () => {
    const res = await url.get('/products')
    return res.data
}
