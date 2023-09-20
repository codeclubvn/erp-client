import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Siderbar } from './Siderbar'

export const MainLayout = () => {
    return (
        <div className="flex min-h-screen max-w-[100vw] flex-col font-font">
            <Header />
            <div className="mt-[72px] flex w-full ">
                <Siderbar />

                <div className="w-[calc(100%-304px)] flex-auto bg-green-50">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
