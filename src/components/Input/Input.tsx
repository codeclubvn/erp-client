import * as React from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '../../utils'
import { forwardRef, useId } from 'react'
import FormControlContext from '../Form/FormControlContext'

const styles = tv({
    slots: {
        label: [
            'relative inline-flex overflow-hidden rounded-md border border-mint-green px-3 pt-3 shadow-sm',
            'focus-within:border-mint-green focus-within:ring-1 focus-within:ring-mint-green',
        ],
        input: [
            'disabled:cursor-not-allowed disabled:bg-gray-50',
            'peer h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm',
        ],
        placeholder:
            'absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-mint-green',
        startDecorator:
            'absolute inset-y-0 flex items-center left-3 pointer-events-none text-gray-500',
        endDecorator:
            'absolute inset-y-0 flex items-center right-3 pointer-events-none text-gray-500',
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
                placeholder: 'peer-placeholder-shown:text-red-500',
                startDecorator: 'text-red-500',
                endDecorator: 'text-red-500',
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
            <label htmlFor={id} className={baseStyles.label()}>
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
            </label>
        )
        if (startDecorator || endDecorator) {
            return (
                <div className={cn('relative', wrapperClassName)}>
                    <span
                        className={cn(
                            baseStyles.startDecorator(),
                            startDecoratorClassName,
                        )}
                    >
                        {startDecorator}
                    </span>
                    {child}
                    <span
                        className={cn(
                            baseStyles.endDecorator(),
                            endDecoratorClassName,
                        )}
                    >
                        {endDecorator}
                    </span>
                </div>
            )
        }

        return child
    },
)
