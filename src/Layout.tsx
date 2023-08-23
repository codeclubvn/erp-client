import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './screens/layouts'
import data from './utils/data'
import { Login } from './screens'
import { SignUp } from './screens'
function Layout() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {data.map((item, index) => {
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Layout
