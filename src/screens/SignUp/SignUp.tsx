import { Button, FormControl, FormHelperText, Input } from '../../components'
import { useForm } from 'react-hook-form'

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log('duy watch', errors, watch('input')) // watch input value by passing the name of it

    return (
        <div className="p-4">
            SignUp
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-1/2 flex-auto flex-col space-y-4">
                    <div className="flex space-x-7">
                        <FormControl error={!!errors.input}>
                            <Input
                                placeholder="Tên"
                                defaultValue=""
                                {...register('input', { required: true })}
                            />
                            {errors.input && (
                                <FormHelperText className="text-red-600">
                                    Tên không hợp lệ.
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl>
                            <Input placeholder="Họ" defaultValue="" />
                        </FormControl>
                    </div>
                    <FormControl>
                        <Input placeholder="Tên đăng nhập" defaultValue="" />
                    </FormControl>
                    <FormControl>
                        <Input
                            placeholder="Mật khẩu"
                            defaultValue=""
                            type="password"
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
