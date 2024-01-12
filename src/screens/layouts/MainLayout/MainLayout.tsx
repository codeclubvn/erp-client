import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Siderbar } from './Siderbar'

export const MainLayout = () => {
    return (
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
    )
}
