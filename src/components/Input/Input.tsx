import * as React from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '../../utils'
import { forwardRef, useId } from 'react'
import FormControlContext from '../Form/FormControlContext'

const styles = tv({
    slots: {
        label: [
            'relative inline-flex items-end h-20 overflow-hidden rounded-md border px-5 py-4 shadow-sm cursor-text transition-all',
            ' border-[#E9EBF2] bg-[#E9EBF2]',
            'hover:border-mint-green',
            'focus-within:ring-1 focus-within:ring-mint-green focus-within:bg-transparent focus-within:border-mint-green ',
        ],
        input: [
            'peer w-full text-[#6a6a6a] h-6.5 text-1.5xl font-semibold border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0',
            'disabled:cursor-not-allowed disabled:bg-gray-50',
        ],
        placeholder: [
            'absolute start-5 top-6 -translate-y-1/2 transition-all text-[#A19E9E] ',
            'peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-placeholder-shown:text-[#6a6a6a] ',
            'peer-focus:top-6 peer-focus:text-base peer-focus:text-mint-green',
        ],
        startDecorator: [
            'absolute inset-y-0 flex items-center left-7 text-gray-500 btn-icon ',
            'peer-focus:text-mint-green',
        ],
        endDecorator: [
            'absolute inset-y-0 flex items-center right-7 text-gray-500 btn-icon ',
            'peer-focus:text-mint-green',
        ],
    },
    variants: {
        hasLeft: {
            true: {
                input: 'pl-10',
                placeholder: 'pl-10',
            },
        },
        hasRight: {
            true: {
                input: 'pr-10',
                placeholder: 'pr-10',
            },
        },
        fullWidth: {
            true: {
                label: 'w-full',
            },
        },
        error: {
            true: {
                label: [
                    'border-red-500 bg-red-50 hover:border-red-500',
                    'focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600',
                ],
                placeholder:
                    'peer-placeholder-shown:text-red-500 peer-focus:text-red-500',
                startDecorator: 'text-red-500 peer-focus:text-red-500',
                endDecorator: 'text-red-500 peer-focus:text-red-500',
            },
        },
        disabled: {
            true: {
                input: 'hover:border-gray-300',
            },
        },
    },
    defaultVariants: {
        hasLeft: false,
        hasRight: false,
        fullWidth: false,
        disabled: false,
    },
})

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean
    error?: boolean
    startDecorator?: React.ReactNode
    startDecoratorClassName?: string
    endDecorator?: React.ReactNode
    endDecoratorClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            startDecorator,
            startDecoratorClassName,
            endDecorator,
            endDecoratorClassName,
            fullWidth = false,
            error: errorProps,
            disabled: disabledProps,
            className,
            placeholder,
            autoComplete = 'off',
            defaultValue = '',
            ...rest
        } = props
        const id = useId()

        const formContext = React.useContext(FormControlContext)
        const error = errorProps ?? formContext?.error
        const disabled = disabledProps ?? formContext?.disabled

        const baseStyles = styles({
            hasLeft: !!startDecorator,
            hasRight: !!endDecorator,
            fullWidth,
            error,
            disabled,
        })

        const child = (
            <>
                <input
                    id={id}
                    key={defaultValue + ''}
                    ref={ref}
                    className={cn(baseStyles.input(), className)}
                    disabled={disabled}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    {...rest}
                />
                <span className={cn(baseStyles.placeholder(), className)}>
                    {placeholder}
                </span>
            </>
        )
        return (
            <label htmlFor={id} className={baseStyles.label()}>
                {child}
                <span
                    className={cn(
                        baseStyles.startDecorator(),
                        startDecoratorClassName,
                    )}
                >
                    {startDecorator}
                </span>
                <span
                    className={cn(
                        baseStyles.endDecorator(),
                        endDecoratorClassName,
                    )}
                >
                    {endDecorator}
                </span>
            </label>
        )
    },
)
