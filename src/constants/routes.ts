import {
    Dashboard,
    Manage,
    Transaction,
    Cashbook,
    Debtbook,
    Order,
    CreateOrder,
    Product,
    User,
    Category,
    Login,
} from '../screens'
import CreateUser from '../screens/CreateUser'

import {
    IconUser,
    IconManage,
    IconProduct,
    IconDashboard,
    IconOrder,
    IconWallet,
} from '../svgs'

export const ROUTES = {
    HomePage: '/',
    Order: '/order',
    POS: '/pos',
    Manage: '/manage',
    Transaction: '/transaction',
    Debtbook: '/debtbook',
    User: '/user',
    SignUp: '/signup',
    Login: '/login',
    Cashbook: '/cashbook',
    CreateOrder: '/create_order',
    Category: '/pos/category',
    CreateUser: '/user/createuser',
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
        title: 'Tạo đơn hàng',
        icon: IconManage,
        href: ROUTES.CreateOrder,
        component: CreateOrder,
    },
    {
        title: 'Sản phẩm',
        icon: IconProduct,
        href: ROUTES.POS,
        component: Product,
    },
    {
        title: 'Danh mục sản phẩm',
        icon: IconManage,
        href: ROUTES.Category,
        component: Category,
    },
    {
        title: 'Khách hàng',
        icon: IconUser,
        href: ROUTES.User,
        component: User,
    },
    {
        title: 'Tạo Khách Hàng ',
        icon: IconUser,
        href: ROUTES.CreateUser,
        component: CreateUser,
    },
    {
        title: 'Giao dịch',
        icon: IconWallet,
        href: ROUTES.Transaction,
        component: Transaction,
    },
    {
        title: 'Thu chi',
        icon: IconWallet,
        href: ROUTES.Cashbook,
        component: Cashbook,
    },
    {
        title: 'Sổ nợ',
        icon: IconWallet,
        href: ROUTES.Debtbook,
        component: Debtbook,
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
