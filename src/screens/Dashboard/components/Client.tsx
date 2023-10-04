interface ClientProps {
    properties: string
    name: string
    des: string
}
export const Client = ({ properties, name, des }: ClientProps) => (
    <div className="mb-4 rounded-xl border-t-[1px] bg-white p-2 shadow-xl">
        <h3>{properties}</h3>
        <p className="font-semibold text-[#44AEC3]">{name}</p>
        <p className="mt-2">{des}</p>
    </div>
)
