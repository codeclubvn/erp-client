import * as React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const CardVariants = tv({
    base: ['rounded-[24px] flex flex-col justify-between shadow-[]'],
    variants: {
        size: {
            base: 'w-[336px] h-[156px] px-[20px] py-[24px]',
        },
        background: {
            base: 'bg-white',
            danger: 'bg-red-500',
        },
        titleStyle: {
            base: 'text-[14px] text-[#858D92] font-[400] font-["Raleway"] leading-[100%]',
        },
        priceStyle: {
            base: 'text-[32px] text-[#02173F] font-["Nunito"] font-bold leading-normal',
        },
        percentStyle: {
            percentLow:
                'text-[16px] text-[#FFC13A] font-["Nunito"] not-italic font-[700] leading-[187.5%] -tracking-[0.5px] ms-[8px]',
            percentHigh:
                'text-[16px] text-[#4D81E7] font-["Nunito"] not-italic font-[700] leading-[187.5%] -tracking-[0.5px] ms-[8px]',
        },
    },
})

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof CardVariants> {
    size: 'base'
    price?: string
    content?: string
    percentValue?: string
    background: 'base' | 'danger'
    titleStyle: 'base'
    borderRadius?: 'base'
    priceStyle?: 'base'
    percentStyle?: 'percentLow' | 'percentHigh'
}

export const Card = ({
    price,
    title,
    background,
    size,
    content,
    percentValue,
    titleStyle,
    priceStyle,
    percentStyle,
    ...props
}: CardProps) => {
    const cardClasses = CardVariants({
        background: background,
        size: size,
    })

    const titleClasses = CardVariants({
        titleStyle: titleStyle,
    })

    const priceClasses = CardVariants({
        priceStyle: priceStyle,
    })

    const percentClasses = CardVariants({
        percentStyle: percentStyle,
    })

    const chart = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="45"
            viewBox="0 0 60 45"
            fill="none"
        >
            <rect y="12" width="12" height="33" rx="2" fill="#FFC13A" />
            <rect x="16" y="23" width="12" height="22" rx="2" fill="#FFC13A" />
            <rect x="32" width="12" height="45" rx="2" fill="#FFC13A" />
            <rect x="48" y="33" width="12" height="12" rx="2" fill="#FFC13A" />
        </svg>
    )

    return (
        <div
            data-card
            className={cardClasses}
            {...props}
            style={{
                boxShadow: `0px 1.79871666431427px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02), 0px 8.139008522033691px 10.017241477966309px 0px rgba(0, 0, 0, 0.03)`,
            }}
        >
            <span data-title className={titleClasses}>
                {title}
            </span>
            <div className="flex items-center justify-between">
                <div>
                    <div data-price className={priceClasses}>
                        {price}
                    </div>
                    <div className="flex items-center">
                        <span className={titleClasses}>{content}</span>
                        <span className={percentClasses}>{percentValue}</span>
                    </div>
                </div>
                <div>{chart}</div>
            </div>
        </div>
    )
}
