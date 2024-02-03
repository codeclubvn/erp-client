import { useEffect, useState } from 'react'
import avatar from '../../../../assets/images/imgAvatar.png'
import { IconBell, IconDrop } from '../../../../svgs'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'

export const Account = () => {
    const [isShow, setIsShow] = useState(false)

    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        navigate('/login')
    }

    const Name =
        localStorage.getItem('last_name') +
        ' ' +
        localStorage.getItem('first_name')
    const email = localStorage.getItem('email')
    return (
        <div className="relative flex items-center">
            <div className="cursor-pointer text-3xl">
                <IconBell />
            </div>
            <div className="mx-4 ">
                <h2 className="cursor-pointer font-medium">{Name} </h2>
                <p className="cursor-pointer">{email}</p>
            </div>
            <div className="mr-4 h-12 w-12 cursor-pointer overflow-hidden rounded-full object-cover">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="cursor-pointer text-xl">
                <IconDrop onClick={() => setIsShow(!isShow)} />
            </div>

            <div
                className={`absolute right-0 top-16  ${
                    isShow ? '' : 'invisible opacity-0'
                } rounded-sm bg-white  shadow-lg transition-all duration-300 ease-in-out   `}
            >
                <button className="flex items-center justify-center  gap-2  p-2 text-[14px] font-bold text-neutral-500 hover:text-black  hover:underline">
                    {' '}
                    <div>
                        <SettingsIcon />{' '}
                    </div>{' '}
                    <div> Thông tin đăng nhập </div>
                </button>
                <button
                    onClick={Logout}
                    className=" flex items-center justify-center gap-2   p-2 text-[14px] font-bold text-neutral-500 hover:text-black  hover:underline"
                >
                    {' '}
                    <div>
                        <LogoutIcon />{' '}
                    </div>{' '}
                    <div className="shrink-0"> Đăng xuất </div>
                </button>
            </div>
        </div>
    )
}
