import type { SVGProps } from 'react'
export const SvgIconAction = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={4}
        height={16}
        fill="currentColor"
        {...props}
    >
        <circle cx={2} cy={2} r={2} fill="#858D92" />
        <circle cx={2} cy={8} r={2} fill="#858D92" />
        <circle cx={2} cy={14} r={2} fill="#858D92" />
    </svg>
)
