import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData } from '../../../components'
import { IconAction, IconSetting } from '../../../svgs'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../components/TableData/table.interface'
import { getCashbooks } from '../../../services/cashbookAPI'
import { MoreAction } from './MoreAction'
import { useEffect } from 'react'

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

export function CashbookTable({ handleOpen }) {
    const columns: GridColWithDefaultOptional[] = [
        {
            ...defaultGridColValues,
            field: 'stt',
            headerName: 'STT',
            description: 'STT',
            align: 'left',
            headerAlign: 'left',
            minWidth: 30,
        },
        {
            ...defaultGridColValues,
            field: 'created_at',
            headerName: 'Ngày tạo',
            description: 'Ngày tạo',
            align: 'left',
            headerAlign: 'left',
            minWidth: 150,
        },
        {
            ...defaultGridColValues,
            field: 'cashbook_category',
            headerName: 'Phân loại  ',
            description: 'Phân loại',
            minWidth: 100,
            valueGetter: (params) => {
                return params.value?.name
            },
        },
        {
            ...defaultGridColValues,
            field: 'wallet_name',
            headerName: 'Nguồn tiền',
            description: 'Nguồn tiền',
            minWidth: 100,
        },
        {
            ...defaultGridColValues,
            field: 'amount',
            headerName: 'Tổng tiền',
            description: 'Tổng tiền',
            minWidth: 50,
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
            field: 'note',
            headerName: 'Ghi chú',
            description: 'Ghi chú',
            minWidth: 160,
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
                    <IconAction onClick={() => handleUpdateCashbook()} />
                </MoreAction>
            ),
        },
    ]

    const handleSelectAction = (action: string, id: GridRowId) => {
        console.log(action, id)
    }

    const { data = [], isLoading } = useQuery({
        queryKey: ['cashbooks'],
        queryFn: getCashbooks,
    })

    const handleUpdateCashbook = () => {
        console.log('update')
        handleOpen()
    }

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
                    onHandleSearch={() => getCashbooks()}
                />
            </div>
        </div>
    )
}
