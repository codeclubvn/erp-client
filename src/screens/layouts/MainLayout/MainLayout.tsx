import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Siderbar } from './Siderbar'

export const MainLayout = () => {
    return (
        <div className="flex min-h-screen max-w-[100vw] flex-col font-font">
            <Header />

            <div className="page-content mt-1">
                <div className="relative flex w-full">
                    <Siderbar />

                    <div className="flex-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
