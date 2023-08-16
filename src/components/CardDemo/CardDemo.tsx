import { HTMLAttributes } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { cn } from '../../utils/cn'

export interface CardDemoProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {}

export const cardVariants = tv({
    base: [
        'block max-w-sm p-6 bg-white border border-gray-200 rounded-lg',
        'shadow-[rgba(0,0,0,0.02)_0px_1.8px_2.2px_0px,rgba(0,0,0,0.03)_0px_8.1px_10px_0px]',
        'hover:bg-gray-100',
    ],
})

export const CardDemo = ({ children, className, ...props }: CardDemoProps) => {
    return (
        <div className={cn(cardVariants(), className)} data-card {...props}>
            {children}
        </div>
    )
}
