import { SvgIconSearchNormal } from '../../../svg/IconComponents'

export const Search = ({ onChange, value }) => {
    return (
        <div className="relative flex items-center">
            <input
                type="text"
                name="searchTerm"
                id="searchTearm"
                value={value}
                placeholder="Tìm mã đơn/tên khách hàng/SĐT"
                className="w-[312px] rounded-xl border-[0.5px] border-solid border-[#8D98AA] bg-[#F8F9FB] bg-[#F8F9FB] py-[8px] ps-[36px] text-[#8D98AA] caret-[#8D98AA] placeholder:text-[13px] placeholder:text-[#8D98AA] focus:outline-none"
                onChange={(e) => onChange(e)}
            />
            <span className="absolute left-3">
                <SvgIconSearchNormal />
            </span>
        </div>
    )
}
