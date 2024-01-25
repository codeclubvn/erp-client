import type { SVGProps } from 'react'
const SvgIconDrawstringBag = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={50}
        height={50}
        fill="currentColor"
        {...props}
    >
        <path fill="url(#iconDrawstringBag_svg__a)" d="M0 0h50v50H0z" />
        <defs>
            <pattern
                id="iconDrawstringBag_svg__a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#iconDrawstringBag_svg__b"
                    transform="scale(.001)"
                />
            </pattern>
            <image
                id="iconDrawstringBag_svg__b"
                width={1000}
                height={1000}
            />
        </defs>
    </svg>
)
export default SvgIconDrawstringBag