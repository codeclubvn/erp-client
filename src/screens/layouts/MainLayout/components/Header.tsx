import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../constants'

export const Header = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div
                className="cursor-pointer"
                onClick={() => {
                    navigate(ROUTES.HomePage)
                }}
            >
                HomePage
            </div>
            <div
                className="cursor-pointer"
                onClick={() => {
                    navigate(ROUTES.Overview)
                }}
            >
                {ROUTES.Overview}
            </div>
            <div
                className="cursor-pointer"
                onClick={() => {
                    navigate(ROUTES.POS)
                }}
            >
                {ROUTES.POS}
            </div>
        </div>
    )
}
