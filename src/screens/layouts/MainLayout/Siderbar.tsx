import { NavLink } from 'react-router-dom'
import routerList from '../../../constants/routes'
export const Siderbar = () => {
    return (
        <nav className="z-2 sticky left-0 top-[56px] col-span-1 h-[100vh]">
            {routerList.map((item) => {
                const Icon = item.icon
                return (
                    <NavLink
                        to={item.href}
                        key={item.title}
                        className=" flex w-[304px] justify-center py-4  text-xl hover:bg-[#F8f9fb]  "
                        style={({ isActive, isPending }) => {
                            return {
                                borderRight: isActive
                                    ? '6px solid #44AEC3'
                                    : '',
                                fontWeight: isActive ? 'bold' : '',
                                color: isPending ? 'red' : 'black',
                            }
                        }}
                    >
                        <div className="flex w-[55%]">
                            <Icon className="my-auto h-6 w-6" />

                            <p className="ml-4">{item.title}</p>
                        </div>
                    </NavLink>
                )
            })}
        </nav>
    )
}
