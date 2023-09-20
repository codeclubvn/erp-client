import { useEffect, useState } from 'react'
import { IAction, IPopupActions } from '../../../types/orders.interface'

export const MoreAction = ({
    children,
    items,
    id,
    onChange,
}: IPopupActions) => {
    const [listAction, setListAction] = useState<IAction[]>([])
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setListAction(items)
    }, [items])

    console.log(id)

    const handlSelectAction = (action: IAction) => {
        onChange(action)
    }

    const renderDropdownAction = (
        <div className="max-h-[min(80vh, 734px)] flex w-full flex-col overflow-y-auto overflow-x-hidden rounded-lg border-[1px] border-solid border-[#dfe1e6] py-2">
            {listAction.map((action: IAction, index: number) => (
                <button
                    key={index}
                    onClick={() => handlSelectAction(action)}
                    className="text-red w-full bg-transparent"
                >
                    {action.title}
                </button>
            ))}
        </div>
    )

    return (
        <div className="relative min-w-full">
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    // setIsActive(!isActive)
                }}
                className="flex justify-center"
            >
                {children}
            </div>
            {isActive && (
                <div className="absolute right-[100%] top-0">
                    {renderDropdownAction}
                </div>
            )}
        </div>
    )
}
