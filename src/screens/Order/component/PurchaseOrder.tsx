import { DeleteIcon, EditIcon, MoreIcon } from './IconOrder'

export default function PurchaseOrder() {
    return (
        <div className="mr-4 mt-4 rounded-2xl bg-[#f8f9fb] pb-4">
            <div className="flex items-center justify-between border-b-[1px] px-4 py-4">
                <div className="">
                    <header className="text-xl font-semibold text-[#485162]">
                        Đơn mua
                    </header>
                    <p className="text-[#8d98aa]">Mã đơn: KH2012386</p>
                </div>
                <p className="cursor-pointer rounded-2xl border-[1px] bg-[#BDE0E4]/80 px-3 py-1 text-[#8d98aa]">
                    Tổng <span>5</span> món
                </p>
            </div>
            <ul className="max-h-[260px] overflow-auto">
                <li className="flex items-center  justify-between border-b-[1px] border-dashed p-4 ">
                    <div className="text-[#656565]">
                        <h2 className="">Mì tôm hảo hảo</h2>
                        <p className="text-[18px] font-semibold">5.000</p>
                    </div>
                    <div className="flex h-6 w-[100px] items-center  justify-between rounded-3xl  border-[1px] border-[#D4D4D4]">
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            -
                        </span>
                        <p className="w-3/5 flex-auto border-x-[1px] border-x-[#D4D4D4] text-center font-semibold text-[#44AEC3]">
                            1
                        </p>
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            +
                        </span>
                    </div>
                    <DeleteIcon className="cursor-pointer" />
                </li>
                <li className="flex  items-center justify-between border-b-[1px] border-dashed p-4">
                    <div className="text-[#656565]">
                        <h2 className="">Mì tôm hảo hảo</h2>
                        <p className="text-[18px] font-semibold">5.000</p>
                    </div>
                    <div className="flex h-6 w-[100px] items-center  justify-between rounded-3xl  border-[1px] border-[#D4D4D4]">
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            -
                        </span>
                        <p className="w-3/5 flex-auto border-x-[1px] border-x-[#D4D4D4] text-center font-semibold text-[#44AEC3]">
                            1
                        </p>
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            +
                        </span>
                    </div>
                    <DeleteIcon className="cursor-pointer" />
                </li>
                <li className="flex  items-center justify-between border-b-[1px] border-dashed p-4">
                    <div className="text-[#656565]">
                        <h2 className="">Mì tôm hảo hảo</h2>
                        <p className="text-[18px] font-semibold">5.000</p>
                    </div>
                    <div className="flex h-6 w-[100px] items-center  justify-between rounded-3xl  border-[1px] border-[#D4D4D4]">
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            -
                        </span>
                        <p className="w-3/5 flex-auto border-x-[1px] border-x-[#D4D4D4] text-center font-semibold text-[#44AEC3]">
                            1
                        </p>
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            +
                        </span>
                    </div>
                    <DeleteIcon className="cursor-pointer" />
                </li>
                <li className="flex  items-center justify-between border-b-[1px] border-dashed p-4">
                    <div className="text-[#656565]">
                        <h2 className="">Mì tôm hảo hảo</h2>
                        <p className="text-[18px] font-semibold">5.000</p>
                    </div>
                    <div className="flex h-6 w-[100px] items-center  justify-between rounded-3xl  border-[1px] border-[#D4D4D4]">
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            -
                        </span>
                        <p className="w-3/5 flex-auto border-x-[1px] border-x-[#D4D4D4] text-center font-semibold text-[#44AEC3]">
                            1
                        </p>
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            +
                        </span>
                    </div>
                    <DeleteIcon className="cursor-pointer" />
                </li>
                <li className="flex  items-center justify-between border-b-[1px] border-dashed p-4">
                    <div className="text-[#656565]">
                        <h2 className="">Mì tôm hảo hảo</h2>
                        <p className="text-[18px] font-semibold">5.000</p>
                    </div>
                    <div className="flex h-6 w-[100px] items-center  justify-between rounded-3xl  border-[1px] border-[#D4D4D4]">
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            -
                        </span>
                        <p className="w-3/5 flex-auto border-x-[1px] border-x-[#D4D4D4] text-center font-semibold text-[#44AEC3]">
                            1
                        </p>
                        <span className="w-2/5 flex-auto cursor-pointer text-center text-3xl">
                            +
                        </span>
                    </div>
                    <DeleteIcon className="cursor-pointer" />
                </li>
            </ul>
            <ul className=" border-b-[1px] px-4 pt-2 text-[#858D92]">
                <li className="flex justify-between">
                    <p>Tổng thanh toán</p>
                    <p className="font-semibold text-[#02173F]">385.000</p>
                </li>
                <li className="my-2 flex justify-between">
                    <p>Phương thức thanh toán</p>
                    <select
                        name=""
                        id=""
                        className="border-none font-semibold text-[#02173F] outline-none "
                    >
                        <option value="">Tiền mặt</option>
                        <option value="">Chuyển khoản</option>
                    </select>
                </li>
                <li className="my-2 flex  justify-between">
                    <p>Chiết khấu</p>
                    <select
                        name=""
                        id=""
                        className="font-semibold text-[#02173F]"
                    >
                        <option value="">Giảm 50%</option>
                    </select>
                </li>
                <li className="flex justify-between">
                    <p>Voucher giảm giá</p>
                    <input
                        type="text"
                        placeholder="Nhập mã"
                        className="rounded-xl border-none py-1 pr-2 text-right outline-none"
                    />
                </li>
                <li className="my-2 flex items-center">
                    <p className="mr-2">Vận chuyển</p>
                    <MoreIcon className="cursor-pointer" />
                </li>
                <li className="mb-2 flex items-center">
                    <p className="mr-2">Voucher giảm giá</p>
                    <EditIcon className="h-[18px] w-[18px] cursor-pointer" />
                </li>
            </ul>
            <div className="mt-6 flex justify-between px-4 text-xl font-semibold text-[#02173F]">
                <p>Tổng phải trả</p>
                <p>385.000</p>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <button className="w-[140px] rounded-2xl border-[1px] border-[#76C6D1] py-1 font-semibold text-[#02173F]">
                    Hủy đơn
                </button>
                <button className=" w-[140px] rounded-2xl border-[1px] border-[#76C6D1] bg-[#44AEC3] py-1 font-semibold text-white">
                    Tạo đơn
                </button>
            </div>
        </div>
    )
}
