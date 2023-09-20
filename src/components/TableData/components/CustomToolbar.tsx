import { GridToolbarContainer, ToolbarPropsOverrides } from '@mui/x-data-grid'
import { CustomFilterPanel } from './CustomFilterPanel'
import { DatePicker } from './DatePicker'
import { Search } from './Search'

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
