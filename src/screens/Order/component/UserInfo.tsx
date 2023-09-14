import { EditIcon } from './IconOrder'

export default function UserInfo() {
    return (
        <div className=" mr-4 rounded-xl bg-[#f8f9fb] p-4 text-[#8D98AA]">
            <div className="cu flex justify-between">
                <header className="text-[20px] font-semibold text-[#485162]">
                    Thông tin khách hàng
                </header>
                <EditIcon className="cursor-pointer" />
            </div>
            <h2 className="my-2 text-[18px] font-semibold text-[#44AEC3]">
                Huyền Trang
            </h2>
            <p>123 Trần Phú - Di Linh - Lâm Đồng</p>
            <p>0123.456.789</p>
            <p>thanhnt@gmail.com</p>
        </div>
    )
}
