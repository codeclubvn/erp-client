import { Client, Calendar, PinnedIcon, SubIcon } from './index'

export const Note = () => (
    <div className=" my-4 bg-[#F8F9FB]">
        <div className="mx-2 flex justify-between rounded-xl px-4 py-4 shadow-xl">
            <div className="flex flex-auto flex-col items-center">
                <h2>Số mặt hàng</h2>

                <img src="./public/image/folder.svg" alt="" />
                <p className="text-2xl font-[600]">1000</p>
            </div>
            <div className="flex flex-auto flex-col items-center  border-x-2 border-dashed border-[#858D92] px-2">
                <h2>Lượt mua</h2>
                <img src="./public/image/circle.svg" alt="" />
                <p className="text-2xl font-[600]">1000</p>
            </div>
            <div className=" flex flex-auto flex-col items-center">
                <h2>Trả hàng</h2>
                <img src="./public/image/bag.svg" alt="" />
                <p className="text-2xl font-[600]">1000</p>
            </div>
        </div>
        <div className=" mt-6 rounded-2xl px-4 pt-2 shadow-xl">
            <div className="flex items-center  justify-between rounded-xl px-2 py-2 shadow-2xl">
                <h2 className="font-[600]">ĐÃ GHIM</h2>
                <PinnedIcon />
            </div>
            <div className="mt-4 max-h-[300px] overflow-auto">
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
        <div className=" mt-6 rounded-2xl px-2 pb-4 text-center shadow-xl">
            <div className="flex items-center  justify-between rounded-xl px-2 py-2 pt-4 shadow-2xl">
                <h2 className="font-[600]">NHẮC NỢ</h2>
                <PinnedIcon />
            </div>
            <div className=" flex flex-col items-center justify-center ">
                <div className="mt-4 flex w-[75%] justify-between ">
                    <div className="rounded-lg px-6 py-2 shadow-xl">
                        <h3>Đã nhận</h3>
                        <p>0</p>
                    </div>
                    <div className="w-[110px] rounded-lg px-6 py-2 shadow-xl">
                        <h3>Đã đưa</h3>
                        <p>0</p>
                    </div>
                </div>
                <div className="my-5">
                    <img src="./public/image/money.svg" alt="" />
                </div>
                <p>Chưa có giao dịch nào!</p>
            </div>
            <div className="mt-4 flex justify-center gap-4">
                <div className="flex">
                    <SubIcon />
                    <p className="ml-2">Tôi cho nợ</p>
                </div>
                <div className="flex">
                    <SubIcon />
                    <p className="ml-2">Tôi mượn nợ</p>
                </div>
            </div>
        </div>
        <Calendar />
    </div>
)
