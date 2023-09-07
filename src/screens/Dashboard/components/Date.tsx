import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useState } from 'react'

export const Date = () => {
    const [value, setValue] = useState<number | null>(null)
    return (
        <div className="absolute right-[-10px] top-10 ">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    className="rounded-xl bg-white shadow-xl"
                />
            </LocalizationProvider>
        </div>
    )
}
