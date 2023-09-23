import { ImgCalendar, ImgTraffic, ImgTrafficPercent } from '../../svgs'
import { ChartPie } from './components/index'

function Data() {
    return (
        <div className="mt-6 shadow-xl">
            <h2 className="mb-6 text-2xl ">Tổng hợp số liệu</h2>
            <div className="grid grid-cols-5 gap-4 ">
                <div className="col-span-2">
                    <div className="rounded-xl px-6 py-4 shadow-xl">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-1">
                                <ImgTraffic />
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
                                    <ImgTrafficPercent />
                                </div>
                                <span className=" block text-sm">2.1% </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  items-center rounded-xl px-4 py-5 shadow-xl">
                        <h2 className="text-xl font-[600]">Tổng kho</h2>
                        <p>Số lượng hàng trong kho</p>

                        <ChartPie />
                        <p className="flex  w-[140px] items-center">
                            <span className="mr-2 block h-2 w-2 rounded-full bg-[#44AEC3]"></span>
                            Tổng kho <span className="ml-2">24.3%</span>
                        </p>
                        <p className="flex w-[140px] items-center ">
                            <span className="mr-2 block h-2 w-2 rounded-full bg-[#629AEE]"></span>
                            Còn hàng <span className="ml-2">41.8%</span>
                        </p>
                        <p className="flex w-[140px] items-center ">
                            <span className="mr-2 block h-2 w-2 rounded-full bg-[#FFC13A]"></span>
                            Hêt hàng <span className="ml-2">10.8%</span>
                        </p>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col items-center px-4 py-5 shadow-xl">
                    <h2 className="text-xl font-[600]">Sản phẩm bán chạy</h2>
                    <p>Các sản phẩm bán chạy trong 7 ngày gần nhất</p>
                    <div>
                        <ImgCalendar />
                    </div>
                    <p className="mt-10 text-lg">Chưa có sản phẩm nào </p>
                </div>
            </div>
        </div>
    )
}

export default Data
