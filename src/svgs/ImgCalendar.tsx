import type { SVGProps } from 'react'
const SvgImgCalendar = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={206}
        height={206}
        fill="currentColor"
        {...props}
    >
        <path fill="url(#imgCalendar_svg__a)" d="M0 0h206v206H0z" />
        <defs>
            <pattern
                id="imgCalendar_svg__a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#imgCalendar_svg__b"
                    transform="scale(.00033)"
                />
            </pattern>
            <image
                id="imgCalendar_svg__b"
                width={3000}
                height={3000}
            />
        </defs>
    </svg>
)
export default SvgImgCalendar