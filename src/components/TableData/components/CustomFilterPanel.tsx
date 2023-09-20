import { forwardRef, useCallback, useMemo } from 'react'
import { Button, Tooltip } from '@mui/material'
import {
    GridPreferencePanelsValue,
    gridFilteredTopLevelRowCountSelector,
    gridPreferencePanelStateSelector,
} from '@mui/x-data-grid'
import { useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import { ICustomFilterPanel } from '../../../types/table.interface'
import { SvgIconSort } from '../../../svg/IconComponents'

export const CustomFilterPanel = forwardRef<
    HTMLButtonElement,
    ICustomFilterPanel
>(function CustomFilterPanel({ ref, disableColumnFilterProp, ...props }) {
    const apiRef = useGridApiContext()
    const counter = useGridSelector(
        apiRef,
        gridFilteredTopLevelRowCountSelector,
    )

    const preferencePanel = useGridSelector(
        apiRef,
        gridPreferencePanelStateSelector,
    )

    const tooltipContentNode = useMemo(() => {
        if (preferencePanel.open) {
            return apiRef!.current.getLocaleText(
                'toolbarFiltersTooltipHide',
            ) as React.ReactElement
        }
        if (counter === 0) {
            return apiRef!.current.getLocaleText(
                'toolbarFiltersTooltipShow',
            ) as React.ReactElement
        }
        return (
            <div>
                {apiRef!.current.getLocaleText('toolbarFiltersTooltipActive')(
                    counter,
                )}
            </div>
        )
    }, [apiRef, preferencePanel.open, counter])

    const toggleFilter = useCallback(() => {
        const { open, openedPanelValue } = preferencePanel
        if (open && openedPanelValue === GridPreferencePanelsValue.filters) {
            apiRef!.current.hideFilterPanel()
        } else {
            apiRef!.current.showFilterPanel()
        }
    }, [apiRef, preferencePanel])

    if (disableColumnFilterProp) {
        return null
    }

    return (
        <Tooltip title={tooltipContentNode} enterDelay={1000}>
            <Button
                ref={ref}
                {...props}
                onClick={toggleFilter}
                size="small"
                color="primary"
                aria-label={apiRef!.current.getLocaleText(
                    'toolbarFiltersLabel',
                )}
                sx={{
                    fontSize: '13px',
                    color: '#02173F',
                    textTransform: 'capitalize',
                }}
                startIcon={<SvgIconSort />}
            >
                {apiRef!.current.getLocaleText('toolbarFilters')}
            </Button>
        </Tooltip>
    )
})
