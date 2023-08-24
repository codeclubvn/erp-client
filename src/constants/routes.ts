import { User } from 'lucide-react'
import {Dashboard, Manage, Money, Order, Product} from '../screens'

export const ROUTES = {
    HomePage: '/',
    Order: '/order',
    Overview: '/overview',
    POS: '/pos',
    SignUp: '/signup',
    Login: '/login',
}

const routerList = [
    {
        title: 'Dashboard',
        icon: './src/icons/iconSiderbar/home-2.svg',
        href: ROUTES.HomePage,
        component: Dashboard,
    },
    {
        title: 'Đơn hàng',
        icon: './src/icons/iconSiderbar/story.svg',
        href: ROUTES.Order,
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

export const defaultTitle = 'Default'

export const routeTitleMapper = {
    [ROUTES.HomePage]: 'HomePage',
    [ROUTES.Overview]: 'Overview',
    [ROUTES.POS]: 'POS',
    [ROUTES.SignUp]: 'SignUp',
    [ROUTES.Login]: 'Login',
}

export const getRouteTitle = (route) => {
    return routeTitleMapper[route] ?? defaultTitle
}

export default routerList