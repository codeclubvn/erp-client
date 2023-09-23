import { Dashboard, Manage, Money, Order, Product, User } from '../screens'
import {
    IconUser,
    IconManage,
    IconMoney,
    IconProduct,
    IconDashboard,
    IconOrder,
} from '../svgs'

export const ROUTES = {
    HomePage: '/',
    Order: '/order',
    POS: '/pos',
    Manage: '/manage',
    Money: '/money',
    User: '/user',
    SignUp: '/signup',
    Login: '/login',
}

const routerList = [
    {
        title: 'Dashboard',
        icon: IconDashboard,
        href: ROUTES.HomePage,
        component: Dashboard,
    },
    {
        title: 'Đơn hàng',
        icon: IconOrder,
        href: ROUTES.Order,
        component: Order,
    },
    {
        title: 'Sản phẩm',
        icon: IconProduct,
        href: ROUTES.POS,
        component: Product,
    },
    {
        title: 'Khách hàng',
        icon: IconUser,
        href: ROUTES.User,
        component: User,
    },
    {
        title: 'Thu chi',
        icon: IconMoney,
        href: ROUTES.Money,
        component: Money,
    },
    {
        title: 'Quản lý kho',
        icon: IconManage,
        href: ROUTES.Manage,
        component: Manage,
    },
]

export const defaultTitle = 'Default'

export const routeTitleMapper = {
    [ROUTES.HomePage]: 'HomePage',
    [ROUTES.POS]: 'POS',
    [ROUTES.SignUp]: 'SignUp',
    [ROUTES.Login]: 'Login',
}

export const getRouteTitle = (route) => {
    return routeTitleMapper[route] ?? defaultTitle
}

export default routerList
