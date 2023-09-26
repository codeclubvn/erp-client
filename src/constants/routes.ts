import { Dashboard, Manage, Money, Order, Product, User } from '../screens'
import {
    IconUser,
    IconManage,
    IconProduct,
    IconDashboard,
    IconOrder,
    IconWallet,
} from '../svgs'
import { CategoryProduct } from '../screens/Product/components/CategoryProduct'
import { CreateProduct } from '../screens/Product/components/CreateProduct'
import { CreatOrderContextProvider } from '../screens/Order/context/CreatOrderContext'

export const ROUTES = {
    HomePage: '/',
    Order: '/order',
    Product: '/product',
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
        children: [
            {
                url: 'order/tao-don-hang',
                childComponent: CreatOrderContextProvider,
            },
        ],
    },
    {
        title: 'Sản phẩm',

        icon: IconProduct,
        href: ROUTES.Product,
        component: Product,
        children: [
            {
                url: 'product/danh-muc-san-pham',
                childComponent: CategoryProduct,
            },
            {
                url: 'product/tao-san-pham',
                childComponent: CreateProduct,
            },
        ],
    },
    {
        title: 'Khách hàng',
        icon: IconUser,
        href: ROUTES.User,
        component: User,
    },
    {
        title: 'Thu chi',
        icon: IconWallet,
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
    [ROUTES.Product]: 'POS',
    [ROUTES.SignUp]: 'SignUp',
    [ROUTES.Login]: 'Login',
}

export const getRouteTitle = (route) => {
    return routeTitleMapper[route] ?? defaultTitle
}

export default routerList
