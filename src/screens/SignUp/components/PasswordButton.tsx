import { forwardRef, useState } from 'react'
import { Input } from '../../../components'
import { IconEyeOutline } from '../../../icons'

type Props = {} & React.ComponentProps<typeof Input>
export const PasswordInput = forwardRef<HTMLInputElement, Props>(
    (props: Props, ref) => {
        const [type, setType] = useState<'password' | 'text'>('password')

        return (
            <Input
                {...props}
                ref={ref}
                placeholder="Mật khẩu"
                defaultValue=""
                type={type}
                endDecorator={
                    <span
                        className="color-blue-200 z-10 h-10 w-10 cursor-pointer"
                        onClick={() => {
                            setType(type === 'password' ? 'text' : 'password')
                        }}
                    >
                        {IconEyeOutline}
                    </span>
                }
            />
        )
    },
)
