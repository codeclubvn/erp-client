import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    HomePage,
    Login,
    Overview,
    Pos,
    SignUp,
    PurchaseOrders,
} from './screens'
import { MainLayout } from './screens/layouts'
import { ROUTES } from './constants'
import { RouteHandler } from './screens/layouts/RouteHandler/RouteHandler'

export const routes = (
    <BrowserRouter basename="">
        <Routes>
            <Route element={<RouteHandler />}>
                <Route element={<MainLayout />}>
                    <Route path="/" Component={HomePage} />
                    <Route path={ROUTES.Overview} Component={Overview} />
                    <Route path={ROUTES.POS} Component={PurchaseOrders} />
                </Route>
                <Route path={ROUTES.SignUp} Component={SignUp} />
                <Route path={ROUTES.Login} Component={Login} />
            </Route>
        </Routes>
    </BrowserRouter>
)
