import Overview from './Overview'
import Finance from './Finance'
import Data from './Data'
import { Note } from './components'
export const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white shadow-xl">
            <div className="col-span-2 rounded-l-2xl rounded-r-2xl bg-[#F8f9fb]  px-6 py-6">
                <header>
                    <h1 className="text-[30px] font-semibold">Dashboard</h1>
                    <p className="text-xl">
                        Chào mừng bạn trở lại, Huyền Trang!
                    </p>
                </header>
                <Overview />
                <Finance />
                <Data />
            </div>
            <Note />
        </div>
    )
}
