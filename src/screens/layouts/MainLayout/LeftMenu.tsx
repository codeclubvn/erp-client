import { useState } from 'react'
import cx from 'classnames'
import { Button } from '../../../components'
import { Expand } from 'lucide-react'
import { ROUTES } from '../../../constants'
import { useNavigate } from 'react-router-dom'

export const LeftMenu = () => {
    const [isExpand, setIsExpand] = useState(true)
    const navigate = useNavigate()

    return (
        <div
            className={cx(
                'sticky left-0 top-[var(--headerHeight)] h-[calc(100vh-var(--headerHeight))]',
                'bg-blue-50',
                { 'w-72': !isExpand },
                { 'w-14': isExpand },
            )}
        >
            <div className="truncate">LeftMenu</div>
            <div
                className="cursor-pointer truncate"
                onClick={() => {
                    navigate(ROUTES.HomePage)
                }}
            >
                HomePage
            </div>
            <div
                className="cursor-pointer truncate"
                onClick={() => {
                    navigate(ROUTES.Overview)
                }}
            >
                {ROUTES.Overview}
            </div>
            <div
                className="cursor-pointer truncate"
                onClick={() => {
                    navigate(ROUTES.POS)
                }}
            >
                {ROUTES.POS}
            </div>
            <Button
                onClick={() => {
                    setIsExpand(!isExpand)
                }}
            >
                <Expand />
            </Button>
        </div>
    )
}
