import { get } from '../services/fetch'

const BASE_URL = ''
const API_URL = `${BASE_URL}/api`

class Client {
    headers: HeadersInit = {
        'Content-Type': 'application/json',
    }

    getAccounts() {
        //  TEMP
        return get(`${API_URL}/accounts`, {
            headers: this.headers,
        })
    }
}

const client = new Client()

export { client }
