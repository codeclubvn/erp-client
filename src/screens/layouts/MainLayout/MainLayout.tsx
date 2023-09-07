import { Header } from './components/Header'
import { Siderbar } from './Siderbar'

export const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen max-w-[100vw] flex-col font-font">
            <Header />

            <div className="page-content">
                <div className="relative flex w-full">
                    <Siderbar />

                    <div className="flex-auto bg-green-50">{children}</div>
                </div>
            </div>
        </div>
    )
}
