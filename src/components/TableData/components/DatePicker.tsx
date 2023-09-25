import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as ComponentDatePicker } from '@mui/x-date-pickers/DatePicker'
import { IconNoteFavorite } from '../../../svgs'

export function DatePicker() {
    return (
        <div className="ms-5 flex items-center">
            <span className="me-3 text-[13px] text-[#02173F]">Thời gian</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ComponentDatePicker
                    label="Chọn ngày"
                    slots={{
                        openPickerIcon: IconNoteFavorite,
                    }}
                    sx={{
                        width: '145px',
                        height: '40px',
                        fontSize: '13px',
                        backgroundColor: '#F8F9FB',
                        '.MuiFormLabel-root': {
                            fontSize: '13px',
                            color: '#8D98AA',
                            top: '-6px',
                        },
                        '.MuiInputBase-input': {
                            fontSize: '13px',
                            color: '#8D98AA',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#8D98AA !important',
                            borderWidth: '1px !important',
                            borderRadius: '12px',
                        },
                    }}
                    format="DD/MM/YYYY"
                />
            </LocalizationProvider>
        </div>
    )
}
