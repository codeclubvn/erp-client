import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData } from '../../../components'
import { IconAction, IconSetting } from '../../../svgs'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../components/TableData/table.interface'
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
    const popUpOrderDetail = (params) => {
        console.log('popUpOrderDetail', params)
    }

    const columns: GridColWithDefaultOptional[] = [
        {
            ...defaultGridColValues,
            field: 'created_at',
            headerName: 'Ngày tạo đơn',
            description: 'Ngày tạo đơn',
            align: 'left',
            headerAlign: 'left',
            minWidth: 135,
        },
        {
            ...defaultGridColValues,
            field: 'code',
            headerName: 'Mã đơn',
            description: 'Mã đơn',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'customer_name',
            headerName: 'Tên khách hàng',
            description: 'Tên khách hàng',
            minWidth: 200,
        },
        {
            ...defaultGridColValues,
            field: 'status',
            headerName: 'Trạng thái',
            description: 'Trạng thái',
            minWidth: 160,
        },
        {
            ...defaultGridColValues,
            field: 'total',
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
                    <IconAction
                        className="cursor-pointer"
                        onClick={popUpOrderDetail(params.row)}
                    />
                </MoreAction>
            ),
        },
    ]

    const handleSelectAction = (action: string, id: GridRowId) => {
        console.log(action, id)
    }

    const { data = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
    })

    return (
        <div className="h-auto ">
            <div className="h-auto min-h-[300px] w-auto rounded-[24px] bg-white">
                <TableData
                    columns={columns}
                    rows={data}
                    getRowId={(row) => row.id}
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
