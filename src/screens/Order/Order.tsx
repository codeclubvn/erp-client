import { useLocation, useNavigate } from 'react-router-dom'
import { AddCircleIcon } from '../../components/SVG/SVG'
import { Statistics } from './components'
export const Order = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // const goCreat = () => {
    //     navigate(`${location.pathname}/path`)
    // }
    return (
        <>
            <div className="px-[32px]">
                <div className="mt-[40px] flex items-center justify-between">
                    <div>
                        <h2 className="text-[28px] font-semibold leading-[32px]">
                            Đơn hàng
                        </h2>
                        <span>Trang chủ • Đơn hàng</span>
                    </div>
                    <button className="flex gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white">
                        <AddCircleIcon /> <span>Tạo đơn hàng</span>
                    </button>
                </div>
                <Statistics />
            </div>
        </>
    )
}
