import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData, Status } from '../../../components'
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

export function ProductTable() {
    const columns: GridColWithDefaultOptional[] = [
        {
            ...defaultGridColValues,
            field: 'date',
            headerName: 'Tên sản phẩm',
            description: 'Tên sản phẩm',
            align: 'left',
            headerAlign: 'left',
            minWidth: 135,
        },
        {
            ...defaultGridColValues,
            field: 'orderId',
            headerName: 'Danh mục',
            description: 'Danh mục',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'customerName',
            headerName: 'Đơn vị tính',
            description: 'Đơn vị tính',
            minWidth: 200,
        },
        {
            ...defaultGridColValues,
            field: 'shippingDate',
            headerName: 'Giá bán',
            description: 'Giá bán',
            minWidth: 150,
        },
        {
            ...defaultGridColValues,
            field: 'status',
            headerName: 'Hàng sẵn có',
            description: 'Hàng sẵn có',
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
