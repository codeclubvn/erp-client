import type { SVGProps } from 'react'
const SvgImgCancel = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={87}
        height={83}
        fill="currentColor"
        {...props}
    >
        <path fill="url(#imgCancel_svg__a)" d="M0 0h87v83H0z" />
        <defs>
            <pattern
                id="imgCancel_svg__a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#imgCancel_svg__b"
                    transform="matrix(.00177 0 0 .00153 -1.211 -.17)"
                />
            </pattern>
            <image
                id="imgCancel_svg__b"
                width={1920}
                height={1080}
            />
        </defs>
    </svg>
)
export default SvgImgCancel