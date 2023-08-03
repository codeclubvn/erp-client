import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

type Props = {}

export const MainLayout = (_props: Props) => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
