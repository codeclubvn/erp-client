import type { SVGProps } from 'react'
const SvgIconArrowRight = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="currentColor"
        {...props}
    >
        <path
            fill="#858D92"
            d="M7.319 2.5a.65.65 0 0 1 .463.19l5.69 5.641a2.356 2.356 0 0 1 0 3.34l-5.69 5.64a.663.663 0 0 1-.926 0 .649.649 0 0 1 0-.916l5.691-5.641a1.059 1.059 0 0 0 0-1.506l-5.69-5.64a.649.649 0 0 1 0-.918.689.689 0 0 1 .462-.19"
        />
    </svg>
)
export default SvgIconArrowRight
