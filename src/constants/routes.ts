export const ROUTES = {
    HomePage: '/',
    Overview: '/overview',
    POS: '/pos',
    SignUp: '/signup',
    Login: '/login',
}

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
