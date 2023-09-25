import { forwardRef, useState } from 'react'
import { Input } from '..'
import { IconEyeOutline } from '../../svgs'

type Props = {} & React.ComponentProps<typeof Input>

export const PasswordInput = forwardRef<HTMLInputElement, Props>(
    ({ placeholder, ...props }, ref) => {
        const [type, setType] = useState<'password' | 'text'>('password')

        placeholder = placeholder || 'Mật khẩu'

        return (
            <Input
                {...props}
                ref={ref}
                placeholder={placeholder}
                defaultValue=""
                type={type}
                endDecorator={
                    <span
                        className="color-blue-200 z-10 cursor-pointer"
                        onClick={() => {
                            setType(type === 'password' ? 'text' : 'password')
                        }}
                    >
                        <IconEyeOutline />
                    </span>
                }
            />
        )
    },
)
