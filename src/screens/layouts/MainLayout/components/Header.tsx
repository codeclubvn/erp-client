import { Search } from './Search'
import Logo from '../../../../../public/loginImages/number.svg'
import { Account } from './Account'
export const Header = () => {
    return (
        <header className="mx-6 my-2 flex items-center justify-between ">
            <img src={Logo} className="h-[56px] w-[214px]" alt="" />
            <Search />
            <Account />
        </header>
    )
}
