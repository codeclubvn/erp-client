import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './screens/layouts'
import { Login } from './screens'
import { SignUp } from './screens'
import routerList from './constants/routes'
import { CreateOrder } from './screens/Order/components/CreateOrder'
function Router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {routerList.map((item, index) => {
                        const Page = item.component
                        return (
                            <Route
                                key={index}
                                path={item.href}
                                element={
                                    <MainLayout>
                                        <Page />
                                    </MainLayout>
                                }
                            />
                        )
                    })}
                    <Route
                        path="order/:userId"
                        element={
                            <MainLayout>
                                <CreateOrder />
                            </MainLayout>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router
