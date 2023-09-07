import { useLocation } from 'react-router-dom'
import routerList from '../../constants/routes'
import { SubIcon } from '../../screens/Dashboard/components'
export const LinkName = () => {
    const location = useLocation()
    const link = routerList.find((data) => data.href === location.pathname)
    if (link) {
        const title = link.title
        return (
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-[#02173F]">
                        {title}
                    </h1>
                    <div className="flex items-center text-sm">
                        <p>Trang chủ</p>
                        <span className="mx-2 block h-1 w-1 rounded-full bg-gray-500"></span>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <ul className="flex gap-2 text-[15px]">
                        <li>Danh sách sản phẩm</li>
                        <li>Danh sách sản phẩm</li>
                        <li>Danh sách sản phẩm</li>
                    </ul>
                    <button className="p4-6 flex h-10 w-[160px] items-center justify-center rounded-2xl border-none bg-[#44AEC3] text-white outline-none">
                        <SubIcon className="mix-blend-screen" />
                        <p className="ml-2">Tạo sản phẩm</p>
                    </button>
                </div>
            </div>
        )
    } else {
        console.log('No title')
    }
}
