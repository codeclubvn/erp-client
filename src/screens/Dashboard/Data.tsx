import { BoxIcon, FlowIcon, ChartPie } from './components/index'
function Data() {
    return (
        <div className="mt-6 shadow-xl">
            <h2 className="mb-6 text-2xl ">Tổng hợp số liệu</h2>
            <div className="grid grid-cols-5 gap-4 ">
                <div className="col-span-2">
                    <div className="rounded-xl px-6 py-4 shadow-xl">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-1">
                                <BoxIcon />
                            </div>

                            <div className="col-span-2 text-center ">
                                <h2 className="text-[#858D92]">
                                    Lượt truy cập
                                </h2>
                                <p className="text-2xl text-[#02173F]">
                                    36,015
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center ">
                            <p className="mr-2 text-sm ">Lưu lượng truy cập</p>
                            <div className="flex  rounded-[6px] bg-[#44AEC3] bg-opacity-30 px-2 py-1 text-[#44AEC3]">
                                <div className="mr-2 flex items-center">
                                    <FlowIcon />
                                </div>

                                <span className=" block text-sm">2.1% </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  items-center rounded-xl px-4 py-5 shadow-xl">
                        <h2 className="text-xl font-[600]">Tổng kho</h2>
                        <p>Số lượng hàng trong kho</p>

                        <ChartPie />
                        <div className='flex flex-col items-start'>
                            <div className="flex space-x-2 items-center">
                                <div className="block h-2 w-2 rounded-full bg-[#44AEC3]" />
                                <div>Tổng kho </div>
                                <div className="">24.3%</div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <div className="block h-2 w-2 rounded-full bg-[#629AEE]" />
                                <div>Còn hàng</div>
                                <div className="">41.8%</div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <div className="block h-2 w-2 rounded-full bg-[#FFC13A]" />
                                <div>Hêt hàng</div>
                                <div className="">10.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col items-center px-4 py-5 shadow-xl">
                    <h2 className="text-xl font-[600]">Sản phẩm bán chạy</h2>
                    <p>Các sản phẩm bán chạy trong 7 ngày gần nhất</p>
                    <img
                        src="./public/image/noItem.svg"
                        className="mt-8"
                        alt=""
                    />
                    <p className="mt-10 text-lg">Chưa có sản phẩm nào </p>
                </div>
            </div>
        </div>
    )
}

export default Data
