import { User } from 'lucide-react'
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
                <FormControl className="w-full" error={!!errors.input}>
                    <Input
                        startDecorator={<User />}
                        placeholder="Tên đăng nhập"
                        defaultValue=""
                        {...register('input', { required: true })}
                    />
                    {errors.input && (
                        <FormHelperText className="text-red-600">
                            Tên đăng nhập không hợp lệ.
                        </FormHelperText>
                    )}
                </FormControl>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}
