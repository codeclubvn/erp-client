import { LoginImages } from './LoginImages'
import { Button, FormControl, Input } from '../../components'
import { PasswordInput } from '../../components/Button/PasswordButton'
import { Link } from 'react-router-dom'
import { IconFace, IconGmail, IconZalo } from '../../svgs'

export const Login = () => {
    return (
        <div className="flex max-h-[1024px] max-w-[1440px] items-center">
            <LoginImages />
            <div className="item-center mr-4 flex grow flex-col items-center">
                <div>
                    <h1 className="mt-10 text-center text-4xl font-bold">
                        Đăng nhập
                    </h1>
                    <div className="mb-6 mt-2 flex justify-center ">
                        <div className="mr-1  text-xl font-medium text-[#858D92]">
                            Bạn chưa có tài khoản ?
                        </div>
                        <div className=" text-xl font-medium text-[#44AEC3]">
                            <Link to={'/signup'}>Đăng kí</Link>
                        </div>
                    </div>
                </div>
                <form action="" className="flex flex-col ">
                    <FormControl className="h-[60px] w-[520px]">
                        <Input placeholder="Tên đăng nhập" />
                    </FormControl>
                    <FormControl className="mt-4 h-[60px] w-[520px]">
                        <PasswordInput defaultValue="" />
                    </FormControl>

                    <a href="/" className="m-4 flex justify-end text-xl">
                        Quên mật khẩu ?
                    </a>

                    <div className="w-[520px] overflow-hidden">
                        <Button
                            type="submit"
                            color="aqua"
                            height={60}
                            width={520}
                            display="flex"
                            justifyContent="center"
                            size="xl"
                            borderRadius={40}
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </form>

                <div className="relative mt-10 flex h-[8px] w-[400px] justify-center border-t-2">
                    <div className=" absolute translate-y-[-50%] bg-white px-4 text-xl font-medium text-[#858D92]">
                        Đăng nhập với
                    </div>
                </div>
                <div className="my-4 flex justify-center">
                    <button className="mt-3 flex items-center justify-center ">
                        <IconGmail />
                        <p className="ml-4 text-xl">Đăng nhập với Google</p>
                    </button>
                </div>
                <div className="relative mt-4 flex h-[8px] w-[400px] justify-center border-t-2">
                    <div className=" absolute translate-y-[-50%] bg-white px-4 text-xl font-medium text-[#858D92]">
                        Hoặc
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-evenly">
                    <button className="mr-6 mt-3 flex items-center justify-center rounded-lg border-[1px] px-6 py-1">
                        <IconFace />
                        <p className="ml-4 text-xl">Facebook</p>
                    </button>
                    <button className="mt-3 flex w-[170px] items-center justify-center rounded-lg border-[1px] px-6 py-1">
                        <IconZalo />
                        <p className="ml-4 text-xl">Zalo</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
