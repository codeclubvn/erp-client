import { IconDelivering } from '../../../../svgs'
export const Card = ({ categories }) => {
    return categories.map((category) => (
        <div
            key={category.id}
            className=" px-auto w-65 flex h-32 items-center  space-x-4 rounded-2xl bg-white px-4 py-4 shadow-lg"
        >
            <div className=" shrink-0">
                <img src={category.image} alt="" />
            </div>
            <div>
                <div className="text-xl font-medium text-black ">
                    {category.name}
                </div>
                <div className="text-slate-500">{category.name}</div>
            </div>
        </div>
    ))
}

/* 


 return categories.map((category) => (
        <div
            key={category.id}
            className=" px-auto w-65 flex h-32 items-center  space-x-4 rounded-2xl bg-white px-4 py-4 shadow-lg"
        >
            <div className=" shrink-0">
                <IconDelivering />
            </div>
            <div>
                <div className="text-xl font-medium text-black ">
                    {category.name}
                </div>
                <div className="text-slate-500">{category.name}</div>
            </div>
        </div>
    ))
*/
