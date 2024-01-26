import { useEffect, useState } from 'react'

export const MoreAction = ({ children, items, id, onChange }) => {
    const [listAction, setListAction] = useState(items)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setListAction(items)
    }, [items])

    const handleSelectAction = (action) => {
        onChange(action)
        setIsActive(false)
    }

    return (
        <div className="min-w-ful   ">
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    setIsActive(!isActive)
                }}
                className="flex justify-center text-[#858D92]"
            >
                {children}
            </button>

            <div
                className={`absolute ${
                    isActive ? 'opacity-100' : 'opacity-0 '
                } bottom-4 right-16 text-neutral-500 transition-all    `}
            >
                <div>
                    {listAction.map((action, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelectAction(action)}
                        >
                            {action.icon}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
