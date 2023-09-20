import {
    FooterPropsOverrides,
    gridPageSelector,
    gridPageSizeSelector,
    gridPaginationRowRangeSelector,
    gridRowSelectionStateSelector,
    gridTopLevelRowCountSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid'
import { Panigation } from '../../Panigation'

export const CustomPagination = (props: FooterPropsOverrides) => {
    const apiRef = useGridApiContext()
    const page = useGridSelector(apiRef, gridPageSelector)
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector)
    const totalRow = useGridSelector(apiRef, gridTopLevelRowCountSelector)
    const rowRange = useGridSelector(apiRef, gridPaginationRowRangeSelector)
    const totalSelectionRow = useGridSelector(
        apiRef,
        gridRowSelectionStateSelector,
    )
    const { someContentOption = 'hàng', someCustomPageOption = [] } = props

    const handlePageChange = (unit: number) => {
        apiRef.current.setPage(page + unit)
    }

    const handleChangePageSize = (value: string) => {
        apiRef.current.setPageSize(Number(value))
    }

    console.log('panigation re-render')

    return (
        <Panigation
            onChangePage={handlePageChange}
            onChangePageSize={handleChangePageSize}
            pageOption={someCustomPageOption}
            labelPageOption={someContentOption}
            pageSize={pageSize}
            rowRange={rowRange}
            totalRow={totalRow}
            selectionRow={totalSelectionRow}
        />
    )
}
