import Dashboard from '../screens/Dashboard/Dashboard'
import User from '../screens/User/User'
import Product from '../screens/Product/Product'
import Money from '../screens/Money/Money'
import Manage from '../screens/Manage/Manage'
import Order from '../screens/Order/Order'
const data = [
    {
        title: 'Dashboard',
        icon: './src/icons/iconSiderbar/home-2.svg',
        href: '/',
        component: Dashboard,
    },
    {
        title: 'Đơn hàng',
        icon: './src/icons/iconSiderbar/story.svg',
        href: '/order',
        component: Order,
    },
    {
        title: 'Sản phẩm',
        icon: './src/icons/iconSiderbar/note-favorite.svg',
        href: '/product',
        component: Product,
    },
    {
        title: 'Khách hàng',
        icon: './src/icons/iconSiderbar/profile-2user.svg',
        href: '/user',
        component: User,
    },
    {
        title: 'Thu chi',
        icon: './src/icons/iconSiderbar/empty-wallet.svg',
        href: '/money',
        component: Money,
    },
    {
        title: 'Quản lý kho',
        icon: './src/icons/iconSiderbar/box.svg',
        href: '/manage',
        component: Manage,
    },
]

export default data
