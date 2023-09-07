import { useLocation, useNavigate } from 'react-router-dom'
export const Order = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const goCreat = () => {
        navigate(`${location.pathname}/createorder`)
    }
    return <h1 onClick={goCreat}>Order</h1>
}
