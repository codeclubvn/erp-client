import { statusTitleWrapper, statusClassname } from '../../constants/status'
import { cn } from '../../utils'

export const Status = ({ status }) => {
    return (
        <div
            className={cn(
                'font-[Nunito, sans-serif] w-[102px]  max-w-[102px] rounded-[8px] text-center text-[13px] leading-[33px]',
                statusClassname[status],
            )}
        >
            {statusTitleWrapper[status]}
        </div>
    )
}
