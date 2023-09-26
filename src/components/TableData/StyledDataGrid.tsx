import { styled } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { IDataGridProps } from './table.interface'

const StyledDataGrid = styled(DataGrid, {
    shouldForwardProp: (prop) => prop !== 'checkBox',
})<Omit<IDataGridProps, 'onHandleSearch'>>(({ checkBox }) => ({
    border: 0,
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',

    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
        display: 'none',
    },

    '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus': {
        outline: 0,
    },
    '.MuiDataGrid-columnHeaders': {
        background: 'rgba(189, 224, 228, 0.40)',
    },
    '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell ': {
        pt: '11px',
        pb: '14px',
        borderBottom: 0,
        width: 'fit-content',
    },
    '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
        pt: '11px',
        pb: '14px',
        borderBottom: 0,
        width: 'fit-content',
    },
    '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
        pt: '11px',
        pb: '14px',
        borderBottom: 0,
        width: 'fit-content',
    },

    '& .MuiDataGrid-row ': {
        borderBottom: '1px dashed #8D98AA',
    },
    '& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within':
        {
            outline: 0,
        },
    '& .MuiDataGrid-cell:last-child': {
        // width: '0 !important',
    },
    '--DataGrid-overlayHeight': '300px',
    '& .MuiDataGrid-toolbarContainer': {
        padding: '34px 65px 26px 26px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    '& .MuiDataGrid-toolbarContainer > button': {
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.10)',
        color: '#02173F',
    },
    '.MuiDataGrid-virtualScroller': {
        minHeight: '300px',
    },
    ...(!checkBox && {
        '& .MuiDataGrid-columnHeaders, & .MuiDataGrid-row, & .MuiDataGrid-footerContainer':
            {
                paddingLeft: '40px',
            },
        '& .MuiDataGrid-toolbarContainer': {
            padding: '34px 65px 26px 50px',
            display: 'flex',
            justifyContent: 'space-between',
        },
    }),
}))

export default StyledDataGrid
