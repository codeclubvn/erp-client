import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData, Status } from '../../../components'
import { IconAction, IconSetting } from '../../../svgs'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../components/TableData/table.interface'
import { getCustomers } from '../../../services/customerAPI'
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

export function UserTable() {
    const columns: GridColWithDefaultOptional[] = [
        {
            ...defaultGridColValues,
            field: 'date',
            headerName: 'Khách hàng',
            description: 'Khách hàng',
            align: 'left',
            headerAlign: 'left',
            minWidth: 135,
        },
        {
            ...defaultGridColValues,
            field: 'orderId',
            headerName: 'Đơn gần nhất',
            description: 'Đơn gần nhất',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'customerName',
            headerName: 'Tổng đơn giao',
            description: 'Tổng đơn giao',
            minWidth: 200,
        },
        {
            ...defaultGridColValues,
            field: 'shippingDate',
            headerName: 'Số tiền',
            description: 'Số tiền',
            minWidth: 150,
        },
        {
            ...defaultGridColValues,
            field: 'status',
            headerName: 'Nợ',
            description: 'Nợ',
            minWidth: 160,
            renderCell: (params) => {
                return <Status status={params.value} />
            },
        },
        {
            ...defaultGridColValues,
            field: 'action',
            headerName: 'Action',
            description: 'Action',
            type: 'actions',
            minWidth: 100,
            renderHeader: () => {
                return <IconSetting />
            },
            renderCell: (params) => (
                <MoreAction
                    items={actions}
                    id={params.row.id}
                    onChange={({ action }) => {
                        handleSelectAction(action, params.row.id)
                    }}
                >
                    <IconAction />
                </MoreAction>
            ),
        },
    ]

    const handleSelectAction = (action: string, id: GridRowId) => {
        console.log(action, id)
    }

    const { data = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: getCustomers,
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
                    onHandleSearch={() => getCustomers()}
                />
            </div>
        </div>
    )
}
