import { GridRowId } from '@mui/x-data-grid'

export interface IAction {
    title: string
    icon: JSX.Element
    action: string
}

export interface IPopupActions {
    items: IAction[]
    onChange: (params: IAction) => void
    children: JSX.Element
    id: GridRowId
}

export interface IOrder {
    date: string
    orderId: string
    customerName: string
    shippingDate: string
    status: string
    totalAmount: string
}
