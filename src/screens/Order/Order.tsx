import { Statistics, OrderTable } from './components'
import { IconAddCircle, IconDownload } from '../../svg/IconComponents'

export const Order = () => {
    return (
        <>
            <div className="px-[calc((100%-1060px)/2)] pb-[75px]">
                <div className="mt-[40px] flex items-center justify-between">
                    <div>
                        <h2 className="text-[28px] font-semibold leading-[32px]">
                            Đơn hàng
                        </h2>
                        <span className="text-[#858D92]">
                            Trang chủ • Đơn hàng
                        </span>
                    </div>
                    <button className="flex gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white">
                        <IconAddCircle /> <span>Tạo đơn hàng</span>
                    </button>
                </div>
                <Statistics />
                <h2 className="mb-7 mt-[56px] flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                    Thống kế đơn hàng{' '}
                    <IconDownload
                        width={'28px'}
                        height={'28px'}
                        className="ms-[24px]"
                    />
                </h2>
                <OrderTable />
            </div>
        </>
    )
}
