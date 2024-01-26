import { useQuery } from '@tanstack/react-query'
import { GridRowId } from '@mui/x-data-grid'
import { TableData, Status } from '../../../components'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { IconAction, IconSetting } from '../../../svgs'
import {
    GridColWithDefaultOptional,
    defaultGridColValues,
} from '../../../components/TableData/table.interface'
import {
    DelCustomers,
    getCustomers,
    getCustomersOne,
} from '../../../services/customerAPI'
import { MoreAction } from './MoreAction'
import UserContext from './UserContext'
import { useContext, useEffect, useState } from 'react'

const actions = [
    {
        title: 'Detail',
        icon: (
            <div>
                <AssignmentIndOutlinedIcon />
            </div>
        ),
        action: 'detail',
    },
    {
        title: 'Setting',
        icon: (
            <div>
                <SettingsOutlinedIcon />
            </div>
        ),
        action: 'setting',
    },
    {
        title: 'Delete',
        icon: (
            <div className="text-red-600">
                <DeleteOutlinedIcon />
            </div>
        ),
        action: 'delete',
    },
]

export function UserTable({ setSelectedCustomer, data, setData }) {
    const { setIsShow } = useContext(UserContext)

    const columns: GridColWithDefaultOptional[] = [
        {
            ...defaultGridColValues,
            field: 'full_name',
            headerName: 'Khách hàng',
            description: 'Khách hàng',
            align: 'left',
            headerAlign: 'left',
            minWidth: 135,
        },
        {
            ...defaultGridColValues,
            field: 'gender',
            headerName: 'Giới tính',
            description: 'Giới tính',
            minWidth: 30,
        },
        {
            ...defaultGridColValues,
            field: 'age',
            headerName: 'Tuổi',
            description: 'Tuổi',
            minWidth: 30,
        },
        {
            ...defaultGridColValues,
            field: 'address',
            headerName: 'Địa chỉ ',
            description: 'Địa chỉ',
            minWidth: 150,
        },
        {
            ...defaultGridColValues,
            field: 'phone_number',
            headerName: 'Số điện thoại',
            description: 'Số điện thoại',
            minWidth: 160,
        },
        {
            ...defaultGridColValues,
            field: 'email',
            headerName: 'Email',
            description: 'Email',
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
                        console.log(action)
                        handleSelectAction(action, params.row.id)
                    }}
                >
                    <IconAction />
                </MoreAction>
            ),
        },
    ]

    const handleSelectAction = async (action: string, id: GridRowId) => {
        if (action === 'detail') {
            setIsShow(true)
            const selectCustomer = await getCustomersOne(id)

            setSelectedCustomer(selectCustomer)
        } else if (action === 'delete') {
            try {
                await DelCustomers(id)

                setData((prevData) =>
                    prevData.filter((customer) => customer.id !== id),
                )
            } catch (error) {
                console.error("error ,don't delete")
            }
        }
    }

    const { data: fetchData = [], isLoading } = useQuery(
        ['orders'],
        getCustomers,
    )

    useEffect(() => {
        setData(fetchData as any[])
    }, [fetchData])

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
