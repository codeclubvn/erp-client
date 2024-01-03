import type { SVGProps } from 'react'
const SvgIconDrop = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={16}
        fill="currentColor"
        {...props}
    >
        <path
            fill="#A29E9E"
            d="M.44 4.465C-.87 2.652.94.144 3.557.144H17.38c2.417 0 3.73 2.173 2.415 3.996l-6.91 9.576c-1.316 1.823-4.326 2-5.535.325L.44 4.465Z"
        />
    </svg>
)
export default SvgIconDrop
