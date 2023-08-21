import { useForm } from 'react-hook-form'
import { Button, FormControl, FormHelperText, Input } from '../../components'
import { PasswordInput } from '../../components/Button/PasswordButton'
import { Link } from 'react-router-dom'
import layOutSigUp from '../../../public/Vector 1.png'
import logoZalo from '../../../public/logoZalo.png'
import logoFace from '../../../public/logoFace.svg'
import logoGmail from '../../../public/logoGmail.svg'

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log('duy submit', data)

    return (
        <div className="flex justify-between font-[Raleway] ">
            <div className="ml-[112px]">
                <div>
                    <div className="mt-[44px] flex items-center">
                        <div className="mr-[19px]  h-[60px] w-[60px] rounded-[50px] bg-[#44AEC3]"></div>
                        <div className=" text-[24px] font-semibold">
                            Sổ bán hàng
                        </div>
                    </div>
                    <div className="mt-[70px]  text-xl font-semibold text-[#858D92]">
                        BẮT ĐẦU MIỄN PHÍ
                    </div>
                    <div className="my-3  text-[64px] font-bold ">
                        Tạo tài khoản
                    </div>
                    <div className="mb-[45px] flex items-center">
                        <div className="mr-1  text-[24px] font-medium text-[#858D92]">
                            Đã có tài khoản ?
                        </div>
                        <div className=" text-[24px] font-medium text-[#44AEC3]">
                            <Link to={'/login'}>Đăng nhập</Link>
                        </div>
                    </div>
                </div>
                <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-7">
                            <FormControl error={!!errors.name}>
                                <Input
                                    placeholder="Tên"
                                    defaultValue=""
                                    {...register('name', { required: true })}
                                />
                                {errors.input && (
                                    <FormHelperText className="text-red-600">
                                        Tên không hợp lệ.
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl error={!!errors.last}>
                                <Input
                                    placeholder="Họ"
                                    defaultValue=""
                                    {...register('last', { required: true })}
                                />
                            </FormControl>
                        </div>
                        <FormControl error={!!errors.username}>
                            <Input
                                placeholder="Tên đăng nhập"
                                defaultValue=""
                                {...register('username', { required: true })}
                            />
                        </FormControl>
                        <FormControl error={!!errors.password}>
                            <PasswordInput
                                defaultValue=""
                                {...register('password', { required: true })}
                            />
                        </FormControl>
                        <FormControl error={!!errors.repassword}>
                            <PasswordInput
                                defaultValue=""
                                placeholder="Nhập lại mật khẩu"
                                {...register('repassword', { required: true })}
                            />
                        </FormControl>
                    </div>
                    <div className="text- pt-[24px] font-bold ">
                        <Button
                            type="submit"
                            color="aqua"
                            height={80}
                            width={615}
                            display="flex"
                            justifyContent="center"
                            size="xxl"
                            borderRadius={40}
                        >
                            Tạo tài khoản
                        </Button>
                    </div>
                </form>
                <div className=" mt-[45px] text-center  text-xl font-medium text-[#858D92]">
                    Đăng ký qua các mạng xã hội
                </div>
                <div className="mx-auto mb-[8px] mt-1 w-[300px] border"></div>
                <div className="flex items-center justify-center">
                    <div className="">
                        <img src={logoGmail} alt="" />
                    </div>
                    <div className="mx-5">
                        <img src={logoFace} alt="" />
                    </div>
                    <div>
                        <img src={logoZalo} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <img src={layOutSigUp} alt="layOutSigUp" />
            </div>
        </div>
    )
}
