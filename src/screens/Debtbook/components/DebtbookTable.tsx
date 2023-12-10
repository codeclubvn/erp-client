import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData } from '../../../components'
import { IconAction, IconSetting } from '../../../svgs'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../components/TableData/table.interface'
import { getDebtbooks } from '../../../services/debtBookAPI'
import { MoreAction } from './MoreAction'
import { useEffect, useState } from 'react'

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

export function DebtbookTable() {
    const [dataCustom, setDataCustom] = useState([])
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
            field: 'cashbook_category_name',
            headerName: 'Phân loại',
            description: 'Phân loại',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'wallet_name',
            headerName: 'Nguồn tiền',
            description: 'Nguồn tiền',
            minWidth: 200,
        },
        {
            ...defaultGridColValues,
            field: 'amount',
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
        queryKey: ['debtbooks'],
        queryFn: getDebtbooks,
    })
    console.log(data, 'datadata')

    useEffect(() => {
        if (data.length) {
            const dataNew = data.map((value) => ({
                ...value,
                cashbook_category_name: value.cashbook_category.name,
                wallet_name: value.wallet.name,
            }))
            setDataCustom(dataNew)
        }
    }, [data])

    console.log(dataCustom, 'dataCustom')
    console.log(data, 'dataCustomdatadata')

    return (
        <div className="h-auto ">
            <div className="h-auto min-h-[300px] w-auto rounded-[24px] bg-white">
                <TableData
                    columns={columns}
                    rows={dataCustom}
                    getRowId={(row) => row.id}
                    someContentOptionRowPerPage={'trang'}
                    pageSizeOptions={[5, 10, 20]}
                    checkBox={true}
                    loading={isLoading}
                    onHandleSearch={() => getDebtbooks()}
                />
            </div>
        </div>
    )
}
