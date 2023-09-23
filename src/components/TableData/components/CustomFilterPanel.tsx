import { forwardRef, useCallback, useMemo } from 'react'
import { Button, ButtonProps, Tooltip } from '@mui/material'
import {
    GridPreferencePanelsValue,
    ToolbarPropsOverrides,
    gridFilteredTopLevelRowCountSelector,
    gridPreferencePanelStateSelector,
} from '@mui/x-data-grid'
import { useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import { IconSort } from '../../../svg/IconComponents'

export interface ICustomFilterPanel
    extends Pick<ToolbarPropsOverrides, 'disableColumnFilterProp'>,
        ButtonProps {}

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
                startIcon={<IconSort />}
            >
                {apiRef!.current.getLocaleText('toolbarFilters')}
            </Button>
        </Tooltip>
    )
})
