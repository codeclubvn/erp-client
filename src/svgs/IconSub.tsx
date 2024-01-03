import type { SVGProps } from 'react'
const SvgIconSub = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="currentColor"
        {...props}
    >
        <path
            fill="#44AEC3"
            d="M9.933 18.958C5 18.958.975 14.942.975 10S5 1.042 9.933 1.042c4.934 0 8.959 4.016 8.959 8.958s-4.017 8.958-8.959 8.958m0-16.666c-4.25 0-7.708 3.458-7.708 7.708s3.458 7.708 7.708 7.708S17.642 14.25 17.642 10s-3.459-7.708-7.709-7.708"
        />
        <path
            fill="#44AEC3"
            d="M13.267 10.625H6.6A.63.63 0 0 1 5.975 10a.63.63 0 0 1 .625-.625h6.667a.624.624 0 1 1 0 1.25"
        />
    </svg>
)
export default SvgIconSub
