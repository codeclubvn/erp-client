import { useCreatOrderContext } from '../context/CreatOrderContext'
import { useState } from 'react'
import IconEdit from '../../../svgs/IconEdit'
import { IconDelete, IconMore } from '../../../svgs'

export default function PurchaseOrder() {
    const [voucherValue, setVoucherValue] = useState(0)
    const {
        removeFromCart,
        listOrder,
        increaseProductQuantity,
        decreaseProductQuantity,
        totalMoney,
    } = useCreatOrderContext()

    // console.log(parseInt(totalMoney.replace(/\./g, '')))
    const handleChangeVoucher = (e) => {
        setVoucherValue(e.target.value)
    }
    console.log(voucherValue)

    return (
        <div className="mr-4 mt-4 rounded-2xl bg-[#f8f9fb] pb-4">
            <div className="flex items-center justify-between border-b-[1px] px-4 py-4">
                <div className="">
                    <header className="text-xl font-semibold text-[#485162]">
                        Đơn mua
                    </header>
                    <p className="text-[#8d98aa]">Mã đơn: KH2012386</p>
                </div>
                <p className="flex cursor-pointer items-end rounded-2xl border-[1px] bg-[#BDE0E4]/80 px-3 pb-1 text-[#8d98aa]">
                    Tổng<p className="mx-1 text-xl">{listOrder.length}</p>
                    món
                </p>
            </div>
            <ul className="max-h-[260px] overflow-auto">
                {listOrder.length === 0 ? (
                    <div className="px-4 pb-4 pt-6 text-center text-[#8d98aa] ">
                        Chưa có sản phẩm nào
                    </div>
                ) : (
                    listOrder.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-center  justify-between border-b-[1px] border-dashed p-4 "
                            >
                                <div className="text-[#656565]">
                                    <h2 className="">{item.title}</h2>
                                    <p className="text-[18px] font-semibold">
                                        {item.price}
                                    </p>
                                </div>
                                <div className="flex h-6 w-[100px] items-center  justify-between rounded-3xl  border-[1px] border-[#D4D4D4]">
                                    <div
                                        onClick={() =>
                                            decreaseProductQuantity(item.id)
                                        }
                                        className="w-2/5 flex-auto cursor-pointer text-center text-3xl"
                                    >
                                        -
                                    </div>
                                    <p className="w-3/5 flex-auto border-x-[1px] border-x-[#D4D4D4] text-center font-semibold text-[#44AEC3]">
                                        {item.quantity}
                                    </p>
                                    <div
                                        onClick={() =>
                                            increaseProductQuantity(item.id)
                                        }
                                        className="w-2/5 flex-auto cursor-pointer text-center text-3xl"
                                    >
                                        +
                                    </div>
                                </div>
                                <div onClick={() => removeFromCart(item.id)}>
                                    <IconDelete className="cursor-pointer" />
                                </div>
                            </li>
                        )
                    })
                )}
            </ul>
            <ul className=" border-b-[1px] px-4 pt-2 text-[#858D92]">
                <li className="flex justify-between">
                    <p>Tổng thanh toán</p>
                    <p className="font-semibold text-[#02173F] ">
                        {totalMoney.toLocaleString()}
                    </p>
                </li>
                <li className="my-2 flex justify-between ">
                    <p>Phương thức thanh toán</p>
                    <select
                        name=""
                        id=""
                        className="border-none bg-[#f8f9fb] text-right font-semibold text-[#02173F] outline-none "
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
                        value={voucherValue}
                        onChange={handleChangeVoucher}
                        className="border-none bg-[#f8f9fb] font-semibold text-[#02173F] outline-none"
                    >
                        <option value="0.5">Giảm 50%</option>
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
                    <IconMore className="cursor-pointer" />
                </li>
                <li className="mb-2 flex items-center">
                    <p className="mr-2">Voucher giảm giá</p>
                    <IconEdit className=" h-4 w-4 cursor-pointer object-cover" />
                </li>
            </ul>
            <div className="mt-6 flex justify-between px-4 text-xl font-semibold text-[#02173F]">
                <p>Tổng phải trả</p>
                <p>{totalMoney.toLocaleString()}</p>
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
