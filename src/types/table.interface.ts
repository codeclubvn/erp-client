import { ButtonProps, SelectChangeEvent } from '@mui/material'
import {
    ToolbarPropsOverrides,
    DataGridProps,
    GridActionsColDef,
    GridColDef,
    GridRowSelectionModel,
} from '@mui/x-data-grid'
declare module '@mui/x-data-grid' {
    interface FooterPropsOverrides {
        someContentOption: string | undefined
        someCustomPageOption: number[]
    }
}
declare module '@mui/x-data-grid' {
    interface ToolbarPropsOverrides {
        disableColumnFilterProp: boolean | undefined
        onChangeValue: (e: IHandleNameChange) => void
        value: string
    }
}

export interface IDataGridProps extends DataGridProps {
    pageSize?: number
    checkBox?: boolean
    someContentOptionRowPerPage?: string
    loading?: boolean
    onHandleSearch: () => void
    pageSizeOptions: number[]
}

export interface ICustomPageOption {
    [key: string]: (number | { value: number; label: string })[] | undefined
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

export type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T
}

export interface IPanigation {
    selectionRow?: GridRowSelectionModel
    rowRange: {
        firstRowIndex: number
        lastRowIndex: number
    } | null
    totalRow: number
    pageSize: number
    pageOption: number[]
    labelPageOption?: string
    onChangePage: (params: number) => void
    onChangePageSize: (params: string) => void
}

export interface ICustomFilterPanel
    extends Pick<ToolbarPropsOverrides, 'disableColumnFilterProp'>,
        ButtonProps {}

export interface IHandleNameChange {
    target: HTMLInputElement
}
