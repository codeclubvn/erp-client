import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { getRouteTitle } from '../../../constants'
import { Helmet } from 'react-helmet'

export const RouteHandler = () => {
    const location = useLocation()
    const [title, setTitle] = useState(() => getRouteTitle(location.pathname))

    useEffect(() => {
        setTitle(getRouteTitle(location.pathname))
    }, [location.pathname])

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Outlet />
        </>
    )
}
