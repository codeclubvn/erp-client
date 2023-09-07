import { Header } from './components/Header'
import { Siderbar } from './Siderbar'

export const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen max-w-[100vw] flex-col font-font">
            <Header />
            <div className="mt-[72px] flex w-full ">
                <Siderbar />

                <div className="flex-auto bg-green-50">{children}</div>
            </div>
        </div>
    )
}
