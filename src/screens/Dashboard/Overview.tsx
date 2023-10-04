import {
    IconDelivered,
    IconDelivering,
    IconPending,
    ImgColBlue,
    ImgColYellow,
} from '../../svgs'

function Overview() {
    return (
        <div className="mt-6">
            <h1 className="text-2xl">Tổng quan</h1>
            <div className="mt-4 flex justify-between gap-6">
                <div className="flex flex-auto rounded-xl bg-white  px-4 py-4 shadow-xl">
                    <div className="flex-auto ">
                        <h2 className="text-[#858D92]">
                            Doanh thu tháng hiện tại
                        </h2>
                        <p className="my-4 text-2xl font-medium">7,350,000</p>
                        <p className="text-[#858D92]">
                            Doanh thu
                            <span className="ml-2 text-[#ffc13a]">-1,29%</span>
                        </p>
                    </div>
                    <div className="flex items-end ">
                        <ImgColBlue className="mb-1 ml-4 h-12 w-[60px] " />
                    </div>
                </div>
                <div className="flex flex-auto rounded-xl bg-white px-4 py-4  shadow-xl">
                    <div className="flex-auto">
                        <h2 className="text-[#858D92]">
                            Lợi nhuận tháng hiện tại
                        </h2>
                        <p className="my-4 text-2xl font-medium">5,110,000 </p>
                        <p className="text-[#858D92]">
                            Lợi nhuận
                            <span className="ml-2 text-[#4D81E7]">+1,8%</span>
                        </p>
                    </div>
                    <div className="flex items-end ">
                        <ImgColYellow className="mb-1 ml-4 h-12 w-[60px] " />
                    </div>
                </div>
            </div>
            <ul className="mt-4 grid grid-cols-3 gap-5">
                <li className="flex rounded-xl bg-white px-4 py-2 shadow-xl">
                    <div className="flex-auto ">
                        <h1 className="text-[#8D98AA]">Chờ xử lý</h1>
                        <p className="text-xl text-[#44AEC3]">300</p>
                    </div>
                    <div className="flex w-12 rounded-xl bg-[#44AEC3]">
                        <div className="m-auto p-1 mix-blend-screen brightness-125 contrast-125">
                            <IconPending />
                        </div>
                    </div>
                </li>
                <li className="flex rounded-xl bg-white px-4 py-2 shadow-xl">
                    <div className="flex-auto">
                        <h1 className="text-[#8D98AA]">Đang giao</h1>
                        <p className="text-xl text-[#87B7FF]">10</p>
                    </div>
                    <div className="flex w-12 rounded-xl bg-[#87B7FF]">
                        <div className="m-auto p-1 mix-blend-screen brightness-125 contrast-125">
                            <IconDelivering />
                        </div>
                    </div>
                </li>
                <li className="flex rounded-xl bg-white px-4 py-2 shadow-xl">
                    <div className="flex-auto">
                        <h1 className="text-[#8D98AA]">Đã giao</h1>
                        <p className="text-xl text-[#ffc13a]">47</p>
                    </div>
                    <div className="flex w-12 rounded-xl bg-[#ffc13a]">
                        <div className="m-auto p-1 mix-blend-screen brightness-125 contrast-125">
                            <IconDelivered />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Overview
