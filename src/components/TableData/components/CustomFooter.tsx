import { GridSlotsComponentsProps } from '@mui/x-data-grid'
import { CustomPagination } from './CustomPagination'

export const CustomFooter = (
    props: NonNullable<GridSlotsComponentsProps['footer']>,
) => {
    return (
        <CustomPagination
            someContentOption={props.someContentOption}
            someCustomPageOption={props.someCustomPageOption}
        />
    )
}
