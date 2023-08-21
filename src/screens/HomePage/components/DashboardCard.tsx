import { HTMLAttributes, ReactNode } from 'react'

import { Card } from '../../../components'
import { VariantProps, tv } from 'tailwind-variants'

export const DashboardCardVariants = tv({
    variants: {
        titleStyle: {
            base: 'text-[14px] text-[#858D92] font-[400] font-["Raleway"] leading-[100%] mb-[20px]',
        },
        priceStyle: {
            base: 'text-[32px] text-[#02173F] font-["Nunito"] font-bold leading-normal',
        },
        percentStyle: {
            percentLow:
                'text-base text-[#FFC13A] font-["Nunito"] not-italic font-[700] leading-[187.5%] -tracking-[0.5px] ms-[8px]',
            percentHigh:
                'text-base text-[#4D81E7] font-["Nunito"] not-italic font-[700] leading-[187.5%] -tracking-[0.5px] ms-[8px]',
        },
    },
})

export interface TitleStyle {
    style?: 'base'
}

export interface PriceStyle {
    style?: 'base'
}

export interface PercentStyle {
    style?: 'percentLow' | 'percentHigh'
}

export interface DashboardCardProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof DashboardCardVariants> {
    title: string
    desc?: string
    price?: string
    percentValue?: string
    chart?: ReactNode
    titleStyle?: TitleStyle['style']
    priceStyle?: PriceStyle['style']
    percentStyle?: PercentStyle['style']
}

export const DashboardCard = ({
    title,
    desc,
    price,
    percentValue,
    chart,
    titleStyle,
    priceStyle,
    percentStyle,
    ...props
}: DashboardCardProps) => {
    const titleClasses = DashboardCardVariants({
        titleStyle,
    })
    const priceClasses = DashboardCardVariants({
        priceStyle,
    })
    const percentClasses = DashboardCardVariants({
        percentStyle,
    })

    return (
        <Card {...props} className="h-[156px] w-[336px] px-[20px] py-[24px]">
            <div data-content>
                <div data-title className={titleClasses}>
                    {title}
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <div data-price className={priceClasses}>
                            {price}
                        </div>
                        <div data-card-footer className="flex items-center">
                            <span className={titleStyle}>{desc}</span>
                            <span className={percentClasses}>
                                {percentValue}
                            </span>
                        </div>
                    </div>
                    <div>{chart}</div>
                </div>
            </div>
        </Card>
    )
}
