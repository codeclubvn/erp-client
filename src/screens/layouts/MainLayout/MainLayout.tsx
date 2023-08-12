import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { NProgressHandler } from '../../../components'
import { LeftMenu } from './LeftMenu'

export const MainLayout = () => {
    return (
        <div className="flex min-h-screen w-screen">
            <Header />
            <div className="page-content flex w-full flex-col bg-green-900">
                <div className="flex w-screen flex-auto">
                    <LeftMenu />
                    <div className="flex-auto bg-green-50">
                        <Outlet />
                    </div>
                </div>
            </div>
            <NProgressHandler />
        </div>
    )
}
