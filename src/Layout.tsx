import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './screens/layouts'
import { ChangePassword, Login } from './screens'
import { SignUp } from './screens'
import { ForgotPassword } from './screens'
import routerList from './constants/routes'
import UserProvider from './screens/User/components/UserProvider'
function Layout() {
    return (
        <UserProvider>
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
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/auth/reset-password/:token"
                        element={<ChangePassword />}
                    />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default Layout
