import fecther from './fetcher'

export const getProducts = async () => {
    const res = await fecther.get('/products')
    return res.data
}
