import { LoginImages } from './LoginImages'
import { Button, FormControl, Input } from '../../components'
import { PasswordInput } from '../../components/Button/PasswordButton'
import { Link } from 'react-router-dom'
import { IconFace, IconGmail, IconZalo } from '../../svgs'
import { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8008/api/v1/auth/login',
                {
                    email: userName,
                    password: passWord,
                },
            )

            const { access_token, refresh_token } = response.data.data.token
            const { first_name, last_name, email } = response.data.data.user

            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', refresh_token)
            localStorage.setItem('first_name', first_name)
            localStorage.setItem('last_name', last_name)
            localStorage.setItem('email', email)

            navigate('/')
        } catch (error) {
            console.error('error', error)
            setIsError(true)
        }
    }
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
                        <Input
                            placeholder="Tên đăng nhập"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl className="mt-4 h-[60px] w-[520px]">
                        <PasswordInput
                            defaultValue=""
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)}
                        />
                    </FormControl>

                    {isError ? (
                        <div className="text-red-800">
                            {' '}
                            Tên đăng nhập hoặc mật khẩu sai
                        </div>
                    ) : (
                        ''
                    )}

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
                            onClick={handleLogin}
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
