import { useState } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const ButtonSizes = ['xs', 'sm', 'base', 'lg', 'xl'] as const
type ButtonSize = (typeof ButtonSizes)[number]

export const ButtonColors = [
    'primary',
    'dark',
    'gray',
    'white',
    'green',
    'red',
] as const
type ButtonColor = (typeof ButtonColors)[number]

export const buttonVariants = tv({
    base: [
        'inline-flex flex-row content-center items-center gap-2 rounded-lg px-3 py-2 align-top text-white select-none',
    ],
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
        },
        color: {
            primary: 'bg-primary-700',
            dark: 'bg-gray-800',
            gray: 'bg-gray-200 text-gray-800',
            white: 'bg-white text-gray-800',
            green: 'bg-green-700',
            red: 'bg-red-700',
        },
        outlined: {
            true: 'border-[1px] bg-transparent',
            false: '',
        },
        disabled: {
            true: 'cursor-not-allowed opacity-50',
            false: '',
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            outlined: true,
            class: 'text-primary-700 border-primary-700',
        },
        {
            color: 'dark',
            outlined: true,
            class: 'text-gray-800 border-gray-800',
        },
        {
            color: 'gray',
            outlined: true,
            class: 'text-gray-800 border-gray-200',
        },
        {
            color: 'white',
            outlined: true,
            class: 'text-white border-white',
        },
        {
            color: 'green',
            outlined: true,
            class: 'text-green-700 border-green-700',
        },
        {
            color: 'red',
            outlined: true,
            class: 'text-red-700 border-red-700',
        },
    ],
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
    loading?: boolean
    size?: ButtonSize
    color?: ButtonColor
    outlined?: boolean
    disabled?: boolean
}

export const Button = ({
    startDecorator,
    endDecorator,
    children,
    onClick,
    size = 'base',
    color = 'primary',
    outlined = false,
    disabled: disabledProp = false,
    loading: loadingProp = false,
    type,
    ...props
}: ButtonProps) => {
    const [fetching, setFetching] = useState(false)
    const isAsyncFunction = onClick?.constructor.name === 'AsyncFunction'
    const disabled = disabledProp || fetching || (!onClick && type != 'submit')
    const loading = fetching || loadingProp

    const onClickHandler = isAsyncFunction
        ? (e) => {
              setFetching(true)
              //   Promise.all([onClick(e), wait()]).then(() => {
              Promise.all([onClick(e)]).then(() => {
                  setFetching(false)
              })
          }
        : onClick

    if (loading) {
        startDecorator = (
            <svg
                fill="currentColor"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin text-xl"
            >
                <g>
                    <path d="M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z" />
                </g>
            </svg>
        )
    }

    return (
        <button
            {...props}
            disabled={disabled}
            onClick={onClickHandler}
            className={buttonVariants({ size, color, outlined, disabled })}
            type={type}
        >
            {startDecorator && (
                <span className="btn-icon">{startDecorator}</span>
            )}
            {children}
            {endDecorator && <span className="btn-icon">{endDecorator}</span>}
        </button>
    )
}
