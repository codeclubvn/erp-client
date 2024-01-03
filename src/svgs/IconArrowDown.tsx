import type { SVGProps } from 'react'
const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="currentColor"
        {...props}
    >
        <path
            fill="#858D92"
            d="M15.75 6.587c0 .15-.055.299-.171.417l-5.077 5.122a2.12 2.12 0 0 1-3.006 0L2.42 7.004a.596.596 0 0 1 0-.833.584.584 0 0 1 .826 0l5.077 5.122a.953.953 0 0 0 1.354 0l5.077-5.122a.584.584 0 0 1 .826 0 .62.62 0 0 1 .171.416"
        />
    </svg>
)
export default SvgIconArrowDown
