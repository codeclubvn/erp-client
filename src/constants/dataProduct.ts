import { GridColDef } from '@mui/x-data-grid'
export const columns: GridColDef[] = [
    { field: 'name', headerName: 'Tên sản phẩm', width: 200 },
    { field: 'category', headerName: 'Danh mục', width: 150 },
    { field: 'unit', headerName: 'Đơn vị tính', width: 150 },
    {
        field: 'price',
        headerName: 'Giá bán',
        type: 'number',
        width: 150,
    },
    {
        field: 'available',
        headerName: 'Hàng sẵn có',
        type: 'number',
        width: 150,
        valueGetter: (params) => {
            if (params.value > 0) {
                return params.value
            }
            return 'Hết hàng'
        },
    },
    {
        field: 'edit',
        headerName: 'Chỉnh sửa',
        sortable: false,
        filterable: false,
        width: 100,
    },
]

export const rows = [
    {
        id: 1,
        name: 'Viên thả lẩu La Cunina gói 300g',
        category: 'Đồ đông lạnh',
        unit: 'Gói',
        price: 20000,
        available: 0,
        edit: 'x',
    },
    {
        id: 2,
        name: 'Viên thả lẩu La Cunina gói 300g',
        category: 'Đồ đông lạnh',
        unit: 'Gói',
        price: 20000,
        available: 675,
    },
    {
        id: 3,
        name: 'Viên thả lẩu La Cunina gói 300g',
        category: 'Đồ đông lạnh',
        unit: 'Gói',
        price: 20000,
        available: 675,
    },
]
