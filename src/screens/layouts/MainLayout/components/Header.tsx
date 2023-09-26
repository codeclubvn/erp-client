import { Search } from './Search'
import { Account } from './Account'
import { ImgNumber } from '../../../../svgs'

export const Header = () => {
    return (
        <header className="fixed z-10 flex w-full items-center justify-between bg-white px-6 py-2 ">
            <div className="h-[56px] w-[214px]">
                <ImgNumber />
            </div>
            <Search />
            <Account />
        </header>
    )
}
