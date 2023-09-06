import { BellIcon, AvatarIcon, DropIcon } from '../../../../icons/AccountIcon'

export const Account = () => {
    return (
        <div className="flex items-center">
            <BellIcon className="cursor-pointer text-3xl" />
            <div className="mx-4 ">
                <h2 className="cursor-pointer font-medium">Huyền Trang</h2>
                <p className="cursor-pointer">Lâm Đồng, VN</p>
            </div>
            <div className="mr-4 h-12 w-12 cursor-pointer overflow-hidden rounded-full object-cover">
                <AvatarIcon className="h-full w-full" />
            </div>
            <DropIcon className="cursor-pointer text-xl" />
        </div>
    )
}
