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

export function CashbookTable() {
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
            headerName: 'Phân loại',
            description: 'Phân loại',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'customerName',
            headerName: 'Nguồn tiền',
            description: 'Nguồn tiền',
            minWidth: 200,
        },
        {
            ...defaultGridColValues,
            field: 'shippingDate',
            headerName: 'Tổng tiền',
            description: 'Tổng tiền',
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
