import { Statistics, UserTable } from './components'
import { IconAddCircle, IconDownload } from '../../svgs'

export const User = () => {
    return (
        <>
            <div className="px-[calc((100%-1060px)/2)] pb-[75px]">
                <div className="mt-[40px] flex items-center justify-between">
                    <div>
                        <h2 className="text-[28px] font-semibold leading-[32px]">
                            Khách hàng
                        </h2>
                        <span className="text-[#858D92]">
                            Trang chủ • Khách hàng
                        </span>
                    </div>
                    <button className="flex gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white">
                        <IconAddCircle /> <span>Tạo khách hàng</span>
                    </button>
                </div>
                <Statistics />
                <div>
                    <span className="mb-7 mt-[56px] flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                        Danh sách khách hàng{' '}
                    </span>
                    <span className="mb-7 flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                        Nhóm khách hàng{' '}
                    </span>
                </div>
                <UserTable />
            </div>
        </>
    )
}
