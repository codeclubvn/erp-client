import { useState } from 'react'
import { GridRowModel } from '@mui/x-data-grid'
import { IDataGridProps, IHandleNameChange } from './table.interface'
import { IOrder } from '../../types/orders.interface'
import StyledDataGrid from './StyledDataGrid'
import {
    CustomToolbar,
    CustomNoRowsOverlay,
    CustomCheckBox,
    CustomPagination,
    CustomLoadingOverlay,
    CustomNoResultOverlay,
} from './components'

export function TableData(props: IDataGridProps) {
    const {
        pageSizeOptions,
        someContentOptionRowPerPage,
        disableColumnFilter,
        rows,
        columns,
        checkBox = true,
        loading,
        onHandleSearch,
        onGetRowId,
    } = props

    const [filteredRows, setFilteredRows] = useState<IOrder[]>()

    const requestSearch = (searchValue: string) => {
        if (searchValue) {
            setFilteredRows([])
            return
        }

        if (!searchValue && filteredRows) {
            setFilteredRows(undefined)
            onHandleSearch()
        }
    }

    return (
        <StyledDataGrid
            rows={filteredRows || rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            autoHeight={true}
            pageSizeOptions={pageSizeOptions}
            columnBuffer={0}
            getRowId={onGetRowId}
            checkboxSelection={checkBox}
            disableRowSelectionOnClick={!checkBox}
            rowHeight={60}
            slots={{
                baseCheckbox: CustomCheckBox,
                loadingOverlay: CustomLoadingOverlay,
                noRowsOverlay: CustomNoRowsOverlay,
                toolbar: CustomToolbar,
                footer: CustomPagination,
                noResultsOverlay: CustomNoResultOverlay,
            }}
            slotProps={{
                footer: {
                    someContentOption: someContentOptionRowPerPage,
                    someCustomPageOption: pageSizeOptions,
                },
                toolbar: {
                    disableColumnFilterProp: disableColumnFilter,
                    onChangeValue: (e: IHandleNameChange) =>
                        requestSearch(e.target.value),
                },
            }}
            localeText={{
                toolbarFilters: 'lọc',
            }}
            loading={loading}
            checkBox={checkBox}
        />
    )
}
