import type { SVGProps } from 'react'
const SvgImgColBlue = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={45}
        fill="currentColor"
        {...props}
    >
        <rect width={12} height={23} y={22} fill="#4D81E7" rx={2} />
        <rect width={12} height={45} x={16} fill="#4D81E7" rx={2} />
        <rect width={12} height={23} x={32} y={22} fill="#4D81E7" rx={2} />
        <rect width={12} height={45} x={48} fill="#4D81E7" rx={2} />
    </svg>
)
export default SvgImgColBlue
