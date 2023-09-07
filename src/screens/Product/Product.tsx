import { LinkName } from '../../components/LinkName'
import { DataGrid } from '@mui/x-data-grid'
import { rows, columns } from '../../constants/dataProduct'
export const Product = () => {
    return (
        <div className="rounded-xl bg-[#f8f9fb] px-6 py-4 shadow-xl">
            <LinkName />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
