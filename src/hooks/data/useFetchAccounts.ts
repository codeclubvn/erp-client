import useSWR from 'swr'
import { client } from '../../libs/api'

const SWR_KEY = 'GET_USERS'

export function useFetchAccounts() {
    const { data, ...rest } = useSWR(SWR_KEY, () => client.getAccounts())

    return {
        accounts: data,
        ...rest,
    }
}
