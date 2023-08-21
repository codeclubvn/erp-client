import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Button, FormControl, FormHelperText, Input } from '../../components'
import { PasswordInput } from '../../components/Button/PasswordButton'
import titles from '../../constants/titles'
export const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log('duy submit', data)

    return (
        <div className="p-4">
            <Helmet>
                <title>{titles.signup}</title>
            </Helmet>
            SignUp
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex  flex-col space-y-4">
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
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}
