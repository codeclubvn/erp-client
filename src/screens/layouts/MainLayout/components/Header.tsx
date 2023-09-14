import { Search } from './Search'
import Logo from '../../../../../public/loginImages/number.svg'
import { Account } from './Account'
export const Header = () => {
    return (
        <header className="fixed z-10 flex w-full items-center justify-between bg-white px-6 py-2">
            <img src={Logo} className="h-[56px] w-[214px]" alt="" />
            <Search />
            <Account />
        </header>
    )
}
