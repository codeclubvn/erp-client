import { useLocation } from 'react-router-dom'
import routerList from '../../constants/routes'
import { Fragment } from 'react'
interface TitlePageProps {
    titlePage?: string
}
export const LinkDerectory = ({ titlePage }: TitlePageProps) => {
    const location = useLocation()
    const link = location.pathname.split('/')[1]
    const url = routerList.find((data) => data.href === `/${link}`)
    return (
        <div>
            <h1 className="text-3xl font-semibold text-[#02173F]">
                {titlePage ? titlePage : url?.title}
            </h1>
            <div className="my-2 flex items-center text-sm">
                <p>Trang chủ</p>
                <span className="mx-2  block h-1 w-1 rounded-full bg-gray-500"></span>
                <p>{url?.title}</p>
                {location.state && (
                    <Fragment>
                        <span className="mx-2 block h-1 w-1 rounded-full bg-gray-500"></span>
                        <p>{location.state}</p>
                    </Fragment>
                )}
            </div>
        </div>
    )
}
