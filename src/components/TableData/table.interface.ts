import { DataGridProps, GridColDef, GridActionsColDef } from '@mui/x-data-grid'

export interface IDataGridProps extends DataGridProps {
    pageSize?: number
    checkBox?: boolean
    someContentOptionRowPerPage?: string
    loading?: boolean
    onHandleSearch: () => void
    pageSizeOptions: number[]
}

export interface IHandleNameChange {
    target: HTMLInputElement
}

type DefaultValues = Pick<
    GridColDef,
    'sortable' | 'disableColumnMenu' | 'editable' | 'align' | 'headerAlign'
>

type Optional<T, K extends keyof T> =
    | (Omit<T, K> & Pick<Partial<T>, K>)
    | GridActionsColDef

export const defaultGridColValues: DefaultValues = {
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    align: 'center',
    headerAlign: 'center',
}

export type GridColWithDefaultOptional = Optional<
    GridColDef,
    keyof DefaultValues
>
