import { AddCircleIcon } from '../../components/SVG/SVG'

export const PurchaseOrders = () => {
    return (
        <>
            <div className="px-[32px]">
                <div className="flex justify-between py-[40px]">
                    <div>
                        <h2>Đơn hàng</h2>
                        <span>Trang chủ • Đơn hàng</span>
                    </div>
                    <button className="flex text-gray-400">
                        <AddCircleIcon /> <span>Tạo đơn hàng</span>
                    </button>
                </div>
            </div>
        </>
    )
}
