import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useLocation } from 'react-router-dom'

NProgress.configure({
    showSpinner: true,
    easing: 'ease',
    speed: 500,
})
export const NProgressHandler = () => {
    const location = useLocation()

    const handleStart = () => {
        NProgress.start()
    }
    const handleComplete = () => {
        NProgress.done(true)
    }

    useEffect(() => {
        handleStart()
        return handleComplete()
    }, [location.pathname])

    return null
}
