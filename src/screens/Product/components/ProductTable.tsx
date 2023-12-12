import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData } from '../../../components'
import { IconAction, IconSetting } from '../../../svgs'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../components/TableData/table.interface'
import { getProducts } from '../../../services/productAPI'
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
            field: 'name',
            headerName: 'Tên sản phẩm',
            description: 'Tên sản phẩm',
            align: 'left',
            headerAlign: 'left',
            minWidth: 135,
        },
        {
            ...defaultGridColValues,
            field: 'image',
            headerName: 'Danh mục',
            description: 'Danh mục',
            minWidth: 130,
        },
        {
            ...defaultGridColValues,
            field: 'price',
            headerName: 'Giá bán',
            description: 'Giá bán',
            minWidth: 150,
        },
        {
            ...defaultGridColValues,
            field: 'quantity',
            headerName: 'Hàng sẵn có',
            description: 'Hàng sẵn có',
            minWidth: 160,
        },
        {
            ...defaultGridColValues,
            field: 'sold',
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
        queryKey: ['products'],
        queryFn: getProducts,
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
                    onHandleSearch={() => getProducts()}
                />
            </div>
        </div>
    )
}
