import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import { cn } from '../../utils'

export const CardVariants = tv({
    base: [
        'block max-w-sm p-6 bg-white border border-gray-200 rounded-lg cursor-pointer',
        'shadow-[rgba(0,0,0,0.02)_0px_1.8px_2.2px_0px,rgba(0,0,0,0.03)_0px_8.1px_10px_0px]',
        'hover:bg-gray-100',
    ],
})

export interface CardProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof CardVariants> {
    className?: string
    children?: ReactNode
}

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div data-card className={cn(CardVariants(), className)} {...props}>
            {children}
        </div>
    )
}
