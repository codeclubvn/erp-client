import type { SVGProps } from 'react'
const SvgImgPending = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={86}
        height={106}
        fill="currentColor"
        {...props}
    >
        <path fill="url(#imgPending_svg__a)" d="M0 0h85.504v106H0z" />
        <defs>
            <pattern
                id="imgPending_svg__a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#imgPending_svg__b"
                    transform="matrix(.00225 0 0 .00168 -1.62 -.39)"
                />
            </pattern>
            <image
                id="imgPending_svg__b"
                width={1920}
                height={1080}
            />
        </defs>
    </svg>
)
export default SvgImgPending