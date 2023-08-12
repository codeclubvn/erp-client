import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { NProgressHandler } from '../../../components'
import { LeftMenu } from './LeftMenu'

export const MainLayout = () => {
    return (
        <div className="h-[200vh]">
            <div className="absolute bottom-0 top-20 flex min-w-full bg-red-50">
                <Header />
                <LeftMenu />
                <div className="bg-red-50">
                    <Outlet />
                </div>
            </div>
            <NProgressHandler />
        </div>
    )
}
