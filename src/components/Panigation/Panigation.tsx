import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { GridRowSelectionModel } from '@mui/x-data-grid'
import { IconArrowDown, IconArrowLeft, IconArrowRight } from '../../svgs'

export interface IPanigation {
    selectionRow?: GridRowSelectionModel
    rowRange?: {
        firstRowIndex: number
        lastRowIndex: number
    }
    totalRow: number
    pageSize: number
    pageOption: number[]
    labelPageOption?: string
    onChangePage: (params: number) => void
    onChangePageSize: (params: string) => void
}

export const Panigation = ({
    selectionRow = [],
    rowRange,
    totalRow,
    pageSize,
    pageOption,
    labelPageOption = 'hàng',
    onChangePage,
    onChangePageSize,
}: IPanigation) => {
    const handleChange = (e: SelectChangeEvent) => {
        onChangePageSize(e.target.value)
    }
    return (
        <div className="flex min-h-[32px] items-center justify-between pb-[20px] pe-[65px] ps-[50px] pt-[15px] text-[#858D92]">
            <div className="px-[10px] text-[#6a6a6a]">
                {!!selectionRow.length && (
                    <p>
                        Có <span>{selectionRow.length}</span> hàng được chọn
                    </p>
                )}
            </div>
            <div className="flex">
                <div className="te me-2 flex items-center">
                    <span
                        className="inline-block cursor-pointer p-1 hover:text-black"
                        onClick={() => onChangePage(-1)}
                    >
                        <IconArrowLeft />
                    </span>
                    {rowRange && (
                        <div className="flex items-center leading-[24px] text-[#6A6A6A]">
                            <span className="inline-block min-w-[23px] text-center ">
                                {rowRange?.firstRowIndex + 1}
                            </span>
                            <span className="inline-block">-</span>
                            <span className="inline-block min-w-[23px] text-center">
                                {totalRow}
                            </span>
                        </div>
                    )}
                    <span
                        className="inline-block cursor-pointer p-1 hover:text-black"
                        onClick={() => onChangePage(1)}
                    >
                        <IconArrowRight />
                    </span>
                </div>
                {!!pageOption.length && (
                    <Select
                        value={pageSize ? `${pageSize}` : ''}
                        onChange={handleChange}
                        inputProps={{
                            'aria-label': 'Without label',
                        }}
                        sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            width: 105,
                            height: 32,
                            borderRadius: '16px',
                            borderColor: '#858D92',
                            color: '#858D92',
                            ':hover': {
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'inherit !important',
                                },
                            },
                            '.MuiSelect-icon': {
                                top: 'unset',
                                right: '12px',
                            },
                            '& > div': {
                                padding: '16.5px 18px',
                            },

                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'inherit !important',
                                borderWidth: '0.5px !important',
                            },
                        }}
                        IconComponent={IconArrowDown}
                    >
                        {pageOption.map((item: number, index: number) => {
                            return (
                                <MenuItem value={item} key={index}>
                                    {item + ' ' + labelPageOption}
                                </MenuItem>
                            )
                        })}
                    </Select>
                )}
            </div>
        </div>
    )
}
