import type { SVGProps } from 'react'
const SvgIconGmail = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={40}
        fill="currentColor"
        {...props}
    >
        <g clipPath="url(#iconGmail_svg__a)">
            <path
                fill="#4285F4"
                d="M11.365 39.803v-20.5l-5.991-5.815L0 10.26v25.925c0 2.002 1.529 3.618 3.41 3.618h7.954"
            />
            <path
                fill="#34A853"
                d="M38.636 39.803h7.953c1.887 0 3.41-1.622 3.41-3.617V10.26l-6.085 3.697-5.279 5.347v20.5"
            />
            <path
                fill="#EA4335"
                d="m11.365 19.304-.816-8.01.816-7.666L25 14.48 38.636 3.628l.911 7.252-.911 8.424L25 30.156 11.365 19.304"
            />
            <path
                fill="#FBBC04"
                d="M38.636 3.628v15.676l11.362-9.044V5.437c0-4.474-4.812-7.024-8.18-4.341l-3.182 2.532"
            />
            <path
                fill="#C5221F"
                d="m.001 10.26 5.227 4.16 6.137 4.884V3.628L8.182 1.096C4.808-1.588 0 .963 0 5.436v4.824Z"
            />
        </g>
        <defs>
            <clipPath id="iconGmail_svg__a">
                <path fill="#fff" d="M0 0h50v40H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgIconGmail
