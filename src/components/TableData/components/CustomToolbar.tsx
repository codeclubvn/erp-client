import { GridToolbarContainer, ToolbarPropsOverrides } from '@mui/x-data-grid'
import { CustomFilterPanel } from './CustomFilterPanel'
import { DatePicker } from './DatePicker'
import { Search } from './Search'
import { IHandleNameChange } from '../table.interface'

declare module '@mui/x-data-grid' {
    interface ToolbarPropsOverrides {
        disableColumnFilterProp: boolean | undefined
        onChangeValue: (e: IHandleNameChange) => void
        value: string
    }
}

export const CustomToolbar = ({
    disableColumnFilterProp,
    onChangeValue,
    value,
}: ToolbarPropsOverrides) => {
    return (
        <GridToolbarContainer>
            <div className="flex items-center">
                <Search onChange={onChangeValue} value={value} />
                <DatePicker />
            </div>
            <CustomFilterPanel
                disableColumnFilterProp={disableColumnFilterProp}
            />
        </GridToolbarContainer>
    )
}
