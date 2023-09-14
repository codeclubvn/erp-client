import { Dashboard, Manage, Money, Order, Product, User } from '../screens'
import {
    DashboardIcon,
    MangageIcon,
    MoneyIcon,
    OrderIcon,
    UserIcon,
    ProductIcon,
} from '../icons/iconSiderbar'
import { CategoryProduct } from '../screens/Product/components/CategoryProduct'
import { CreateProduct } from '../screens/Product/components/CreateProduct'
import { CreateOrder } from '../screens/Order/component/CreateOrder'

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
        icon: DashboardIcon,
        href: ROUTES.HomePage,
        component: Dashboard,
    },
    {
        title: 'Đơn hàng',
        icon: OrderIcon,
        href: ROUTES.Order,
        component: Order,
        children: [
            {
                url: 'order/tao-don-hang',
                childComponent: CreateOrder,
            },
        ],
    },
    {
        title: 'Sản phẩm',
        icon: ProductIcon,
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
    [ROUTES.Product]: 'POS',
    [ROUTES.SignUp]: 'SignUp',
    [ROUTES.Login]: 'Login',
}

export const getRouteTitle = (route) => {
    return routeTitleMapper[route] ?? defaultTitle
}

export default routerList
