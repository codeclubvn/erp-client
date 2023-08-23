import { NavLink } from 'react-router-dom'
import data from '../../../utils/data'
export const Siderbar = () => {
    return (
        <nav className="col-span-1">
            {data.map((item) => (
                <NavLink
                    to={item.href}
                    key={item.title}
                    className="my-4 flex w-[304px] py-2 pl-[50px] text-xl hover:bg-gray-500 "
                >
                    <img className="my-auto h-6 w-6" src={item.icon} alt="" />
                    <p className="ml-4">{item.title}</p>
                </NavLink>
            ))}
        </nav>
    )
}
