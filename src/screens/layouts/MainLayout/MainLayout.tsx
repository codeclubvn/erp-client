import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Siderbar } from './Siderbar'
import { Navigate } from 'react-router-dom'
export const MainLayout = () => {
    const isAuthenticated = localStorage.getItem('access_token') !== null
    return isAuthenticated ? (
        <div className="flex min-h-screen max-w-[100vw] flex-col font-font">
            <Header />
            <div className="page-content">
                <div className="relative flex w-full">
                    <Siderbar />
                    <div className="w-[calc(100%-304px)] flex-auto rounded-lg bg-slate-50 p-[45px] ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}
