import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, Overview, Pos } from './screens'
import { MainLayout } from './screens/layouts'
import { ROUTES } from './constants'

export const routes = (
    <BrowserRouter basename="">
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" Component={HomePage} />
                <Route path={ROUTES.Overview} Component={Overview} />
                <Route path={ROUTES.POS} Component={Pos} />
            </Route>
        </Routes>
    </BrowserRouter>
)
