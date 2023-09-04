import { Dashboard, Manage, Money, Order, Product, User } from '../screens'
import {
    DashboardIcon,
    MangageIcon,
    MoneyIcon,
    OrderIcon,
    UserIcon,
    ProductIcon,
} from '../icons/iconSiderbar'

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
        icon: DashboardIcon,
        href: ROUTES.HomePage,
        component: Dashboard,
    },
    {
        title: 'Đơn hàng',
        icon: OrderIcon,
        href: ROUTES.Order,
        component: Order,
    },
    {
        title: 'Sản phẩm',
        icon: ProductIcon,
        href: ROUTES.POS,
        component: Product,
    },
    {
        title: 'Khách hàng',
        icon: UserIcon,
        href: ROUTES.User,
        component: User,
    },
    {
        title: 'Thu chi',
        icon: MoneyIcon,
        href: ROUTES.Money,
        component: Money,
    },
    {
        title: 'Quản lý kho',
        icon: MangageIcon,
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
