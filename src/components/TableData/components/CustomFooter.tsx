import { GridSlotsComponentsProps } from '@mui/x-data-grid'
import { CustomPagination } from './CustomPagination'

declare module '@mui/x-data-grid' {
    interface FooterPropsOverrides {
        someContentOption?: string
        someCustomPageOption?: number[]
    }
}

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
