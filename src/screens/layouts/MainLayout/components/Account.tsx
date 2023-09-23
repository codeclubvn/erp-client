import avatar from '../../../../assets/images/imgAvatar.png'
import { IconBell, IconDrop } from '../../../../svgs'

export const Account = () => {
    return (
        <div className="flex items-center">
            <div className="cursor-pointer text-3xl">
                <IconBell />
            </div>
            <div className="mx-4 ">
                <h2 className="cursor-pointer font-medium">Huyền Trang</h2>
                <p className="cursor-pointer">Lâm Đồng, VN</p>
            </div>
            <div className="mr-4 h-12 w-12 cursor-pointer overflow-hidden rounded-full object-cover">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="cursor-pointer text-xl">
                <IconDrop />
            </div>
        </div>
    )
}
