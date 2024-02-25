import { Button, FormControl, Input } from '../../components'
import logo from '../../assets/images/logo.png'
import logokey from '../../assets/images/logokey.png'
import { useState } from 'react'
import { forgotPasswordApi } from '../../services/forgotPasswordApi'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }

    const handleForm = async () => {
        try {
            await forgotPasswordApi({ email: email })
            alert('đã gửi yêu cầu , vui lòng kiểm tra gmail')
        } catch (error) {
            console.error(error, 'error')
        }
    }

    return (
        <div>
            <div className="mx-28 my-9 flex items-center gap-52">
                <div>
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="" />
                        <div className="font-font text-3xl font-medium ">
                            LuminaryLucre
                        </div>
                    </div>
                    <div>
                        <img src={logokey} alt="" />
                    </div>
                </div>
                <div className="w-[520px] space-y-5">
                    <p className="font-font text-3xl font-extrabold ">
                        Mời bạn nhập địa chỉ email để khôi phục mật khẩu của
                        mình
                    </p>
                    <div>
                        <FormControl className="h-[80px] w-[520px]">
                            <Input
                                placeholder="Tên đăng nhập"
                                value={email}
                                onChange={handleOnChange}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            color="aqua"
                            height={60}
                            width={520}
                            display="flex"
                            justifyContent="center"
                            size="xl"
                            borderRadius={40}
                            onClick={handleForm}
                        >
                            Gửi
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
