import { Card } from '../Card'

export const Pagination = ({ categories }) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-[32px] ">
                {/* {categories && <Card categories={categories} />} */}
                {categories && Array.isArray(categories) && (
                    <Card categories={categories} />
                )}
            </div>
        </div>
    )
}
