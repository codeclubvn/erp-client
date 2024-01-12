import { toast } from '../../components'

async function http<T>(
    path: string,
    config: RequestInit,
    isShowToast = false,
): Promise<T> {
    const request = new Request(path, config)

    const response = await fetch(request)

    const rsp = await response.json().catch(() => ({}))

    if (isShowToast)
        if (!response.ok) {
            toast.danger({
                title: 'Error',
                message: rsp.message ?? 'Đã có lỗi xảy ra',
            })
        } else {
            toast.success({
                title: 'Success',
                message: rsp.message ?? 'Thành công',
            })
        }

    // may error if there is no body, return empty array
    return rsp
}

export async function get<T>(
    path: string,
    config?: RequestInit,
    isShowToast = false,
): Promise<T> {
    const init = { method: 'get', ...config }
    return await http<T>(path, init, isShowToast)
}

export async function post<T, U>(
    path: string,
    body: T,
    config?: RequestInit,
    isShowToast = false,
): Promise<U> {
    const init = { method: 'post', body: JSON.stringify(body), ...config }
    return await http<U>(path, init, isShowToast)
}

export async function put<T, U>(
    path: string,
    body: T,
    config?: RequestInit,
    isShowToast = false,
): Promise<U> {
    const init = { method: 'put', body: JSON.stringify(body), ...config }
    return await http<U>(path, init, isShowToast)
}

export default { get, post, put }
