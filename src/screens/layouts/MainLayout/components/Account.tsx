import { GoBell } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'

export const Account = () => {
    return (
        <div className="flex items-center">
            <GoBell className="cursor-pointer text-3xl" />
            <div className="mx-4 ">
                <h2 className="cursor-pointer">Huyen Trang</h2>
                <p className="cursor-pointer">LÂM ĐÔNG, VN</p>
            </div>
            <div className="mr-4 h-12 w-12 cursor-pointer overflow-hidden rounded-full object-cover">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                    alt=""
                />
            </div>
            <AiOutlineCaretDown className="cursor-pointer text-xl" />
        </div>
    )
}
