import { Statistics, CashbookTable } from './components'
import { IconAddCircle } from '../../svgs'

export const Cashbook = () => {
    return (
        <>
            <div className="px-[calc((100%-1060px)/2)] pb-[75px]">
                <div className="mt-[40px] flex items-center justify-between">
                    <div>
                        <h2 className="text-[28px] font-semibold leading-[32px]">
                            Thu chi
                        </h2>
                        <span className="text-[#858D92]">
                            Trang chủ • Thu chi
                        </span>
                    </div>
                    <button className="flex gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white">
                        <IconAddCircle /> <span>Tạo giao dịch</span>
                    </button>
                </div>
                <Statistics />
                <div>
                    <span className="mb-7 mt-[56px] flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                        Giao dịch{' '}
                    </span>
                    <span className="mb-7 mt-[56px] flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                        Thu chi{' '}
                    </span>
                    <span className="mb-7 mt-[56px] flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                        Sổ nợ{' '}
                    </span>
                </div>
                <CashbookTable />
            </div>
        </>
    )
}
