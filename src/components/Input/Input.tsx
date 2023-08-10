import * as React from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '../../utils'
import { forwardRef, useId } from 'react'
import FormControlContext from '../Form/FormControlContext'

const styles = tv({
    slots: {
        label: [
            'relative inline-flex overflow-hidden rounded-md border border-mint-green px-3 pt-6 shadow-sm cursor-text',
            'focus-within:border-mint-green focus-within:ring-1 focus-within:ring-mint-green',
        ],
        input: [
            'peer text-[#6a6a6a] text-2xl font-semibold h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm',
            'disabled:cursor-not-allowed disabled:bg-gray-50',
        ],
        placeholder:
            'absolute start-3 top-3 -translate-y-1/2 transition-all text-[#A19E9E] peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#6a6a6a] peer-focus:top-3 peer-focus:text-base peer-focus:text-mint-green',
        startDecorator:
            'absolute inset-y-0 flex items-center left-3 pointer-events-none text-gray-500 peer-focus:text-mint-green',
        endDecorator:
            'absolute inset-y-0 flex items-center right-3 pointer-events-none text-gray-500 peer-focus:text-mint-green',
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
                    'border-red-500',
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
        isInput: true,
    },
})

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean
    error?: boolean
    wrapperClassName?: string
    startDecorator?: React.ReactNode
    startDecoratorClassName?: string
    endDecorator?: React.ReactNode
    endDecoratorClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            wrapperClassName,
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
