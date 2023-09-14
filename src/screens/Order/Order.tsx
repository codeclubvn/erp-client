import { Link } from 'react-router-dom'
import { LinkDerectory } from '../../components/LinkDerectory'
export const Order = () => {
    return (
        <div>
            <LinkDerectory />
            <Link
                to="/order/tao-don-hang"
                state={'Tạo đơn hàng'}
                className="h-4 w-6 bg-red-500"
            >
                Tạo đơn hàng
            </Link>
        </div>
    )
}
