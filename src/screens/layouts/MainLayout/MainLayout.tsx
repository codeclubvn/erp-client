import { Header } from './components/Header'
import { Siderbar } from './Siderbar'

export const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen w-screen flex-col">
            <Header />

            <div className="flex w-screen ">
                <Siderbar />
                <div className="flex-auto bg-green-50">{children}</div>
            </div>
        </div>
    )
}
