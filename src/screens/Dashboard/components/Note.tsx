import { Client, Calendar } from './index'
import {
    IconAdd,
    IconBags,
    IconBuy,
    IconDebt,
    IconFolders,
    IconMoney,
    IconPinned,
    IconSub,
} from '../../../svgs'

export const Note = () => (
    <div className=" my-4 mr-4 bg-white">
        <div className="grid grid-cols-3 justify-between rounded-xl bg-[#F8F9FB] px-2 py-2 shadow-xl ">
            <div className="mr-2 flex flex-auto flex-col items-center ">
                <h2>Số mặt hàng</h2>
                <IconFolders />
                <p className="text-2xl font-semibold">1000</p>
            </div>
            <div className="flex flex-auto flex-col items-center  border-x-2 border-dashed border-[#858D92]">
                <h2>Lượt mua</h2>
                <IconBuy />
                <p className="text-2xl font-semibold">1000</p>
            </div>
            <div className=" flex flex-auto flex-col items-center">
                <h2>Trả hàng</h2>
                <IconBags />
                <p className="text-2xl font-semibold">1000</p>
            </div>
        </div>
        <div className=" mt-6 rounded-2xl bg-[#F8F9FB] px-4 pt-2 shadow-xl">
            <div className="flex items-center justify-between rounded-xl py-2 shadow-2xl">
                <h2 className="ml-2 font-semibold">ĐÃ GHIM</h2>
                <IconPinned className="mr-2" />
            </div>
            <div className="mt-4 max-h-[300px] overflow-auto pl-3 pr-2">
                <Client
                    properties="Khách vip"
                    name="Hoàng Thùy Linh"
                    des="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore magna ..."
                />
                <Client
                    properties="Khách vip"
                    name="Hoàng Thùy Linh"
                    des="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore magna ..."
                />
                <Client
                    properties="Khách vip"
                    name="Hoàng Thùy Linh"
                    des="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore magna ..."
                />
            </div>
        </div>
        <div className=" mt-6 rounded-2xl bg-[#F8F9FB] px-2 pb-4 text-center shadow-xl ">
            <div className="flex items-center  justify-between rounded-xl px-2 py-2 pt-4 shadow-2xl">
                <h2 className="font-semibold">NHẮC NỢ</h2>
                <IconDebt />
            </div>
            <div className=" flex flex-col items-center justify-center ">
                <div className="mt-4 flex w-[75%] justify-between ">
                    <div className="rounded-lg bg-white px-6 py-2  shadow-xl">
                        <h3>Đã nhận</h3>
                        <p className="text-3xl">0</p>
                    </div>
                    <div className="w-[110px] rounded-lg bg-white px-6 py-2 shadow-xl">
                        <h3>Đã đưa</h3>
                        <p className="text-3xl">0</p>
                    </div>
                </div>
                <div className="my-5">
                    <IconMoney />
                </div>
                <p>Chưa có giao dịch nào!</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex cursor-pointer items-center rounded-2xl bg-[#44AEC3] px-2 py-1 text-white">
                    <IconAdd />
                    <p className="ml-2">Tôi cho nợ</p>
                </div>
                <div className="flex cursor-pointer items-center rounded-2xl border-[1px] border-[#44AEC3] px-2 py-1 text-[#44AEC3]">
                    <IconSub />
                    <p className="ml-2">Tôi mượn nợ</p>
                </div>
            </div>
        </div>
        <Calendar />
    </div>
)
