import { forwardRef } from 'react'
import { Checkbox } from '@mui/material'

export const CustomCheckBox = forwardRef<HTMLButtonElement>((props, ref) => {
    return (
        <Checkbox
            {...props}
            ref={ref}
            icon={
                <div className="h-[16px] w-[16px] rounded-[2px] border-[1px] border-[#02173F] bg-transparent"></div>
            }
        />
    )
})
