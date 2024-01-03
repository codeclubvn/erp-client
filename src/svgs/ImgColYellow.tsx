import type { SVGProps } from 'react'
const SvgImgColYellow = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={45}
        fill="currentColor"
        {...props}
    >
        <rect width={12} height={33} y={12} fill="#FFC13A" rx={2} />
        <rect width={12} height={22} x={16} y={23} fill="#FFC13A" rx={2} />
        <rect width={12} height={45} x={32} fill="#FFC13A" rx={2} />
        <rect width={12} height={12} x={48} y={33} fill="#FFC13A" rx={2} />
    </svg>
)
export default SvgImgColYellow
