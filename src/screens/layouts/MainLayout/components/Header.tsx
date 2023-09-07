import { Search } from './Search'
import Logo from '../../../../../public/loginImages/number.svg'
import { Account } from './Account'
export const Header = () => {
    return (
        <header className="z-5 fixed flex w-full items-center justify-between bg-white px-6 py-2 shadow-xl">
            <img src={Logo} className="h-[56px] w-[214px]" alt="" />
            <Search />
            <Account />
        </header>
    )
}
