import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData, Status } from '../../../components'
import { SvgIconAction, SvgIconSetting } from '../../../svg/IconComponents'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../types/table.interface'
import { getOrders } from '../../../services/orderAPI'
import { MoreAction } from './MoreAction'

const actions = [
    {
        title: 'Detail',
        icon: <div>detail</div>,
        action: 'detail',
    },
    {
        title: 'Setting',
        icon: <div>setting</div>,
        action: 'setting',
    },
    {
        title: 'Delete',
        icon: <div>delete</div>,
        action: 'delete',
    },
]

export function OrderTable() {
    const columns: GridColWithDefaultOptional[] = [
        {
            ...defaultGridColValues,
            field: 'date',
            headerName: 'Ngày tạo đơn',
            description: 'Ngày tạo đơn',
            align: 'left',
            headerAlign: 'left',
            minWidth: 135,
        },
        {
            ...defaultGridColValues,
            field: 'orderId',
            headerName: 'Mã đơn',
            description: 'Mã đơn',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'customerName',
            headerName: 'Tên khách hàng',
            description: 'Tên khách hàng',
            minWidth: 200,
        },
        {
            ...defaultGridColValues,
            field: 'shippingDate',
            headerName: 'Ngày giao hàng',
            description: 'Ngày giao hàng',
            minWidth: 150,
        },
        {
            ...defaultGridColValues,
            field: 'status',
            headerName: 'Trạng thái',
            description: 'Trạng thái',
            minWidth: 160,
            renderCell: (params) => {
                return <Status status={params.value} />
            },
        },
        {
            ...defaultGridColValues,
            field: 'totalAmount',
            headerName: 'Tổng tiền',
            description: 'Tổng tiền',
            minWidth: 120,
        },
        {
            ...defaultGridColValues,
            field: 'action',
            headerName: 'Action',
            description: 'Action',
            type: 'actions',
            minWidth: 100,
            renderHeader: () => {
                return <SvgIconSetting />
            },
            renderCell: (params) => (
                <MoreAction
                    items={actions}
                    id={params.row.id}
                    onChange={({ action }) => {
                        handleSelectAction(action, params.row.id)
                    }}
                >
                    <SvgIconAction />
                </MoreAction>
            ),
        },
    ]

    const test = useRef(true)

    const handleSelectAction = (action: string, id: GridRowId) => {
        console.log(action, id)
    }

    const { data = [], isLoading } = useQuery({
        queryKey: ['orders', test.current],
        queryFn: getOrders,
    })

    return (
        <div className="h-auto ">
            <div className="h-auto min-h-[300px] w-auto rounded-[24px] bg-white">
                <TableData
                    columns={columns}
                    rows={data}
                    someContentOptionRowPerPage={'trang'}
                    pageSizeOptions={[5, 10, 20]}
                    checkBox={true}
                    loading={isLoading}
                    onHandleSearch={() => getOrders()}
                />
            </div>
        </div>
    )
}
