import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './screens/layouts'
import { Login } from './screens'
import { SignUp } from './screens'
import routerList from './constants/routes'
function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {routerList.map((item) => {
                        const Page = item.component
                        return (
                            <Route
                                key={item.href}
                                path={item.href}
                                element={<Page />}
                            />
                        )
                    })}
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout
