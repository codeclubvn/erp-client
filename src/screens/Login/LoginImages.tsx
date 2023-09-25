import {
    ImgBox,
    ImgCoin,
    ImgColumn,
    ImgGirl,
    ImgLaptop,
    ImgNumber,
    ImgPerson,
} from '../../svgs'

export const LoginImages = () => (
    <div className="relative h-[100vh] w-[650px] bg-[url('./src/assets/svg/imgUnion.svg')] bg-cover">
        <div className="absolute left-[112px] top-[30px] h-[60px] w-[130px]">
            <ImgNumber />
        </div>
        <div className="absolute left-[60px] top-[60px] h-[502px] w-[400px]">
            <ImgPerson />
        </div>
        <div className="absolute left-[300px] top-[100px] h-[160px] w-[197px]">
            <ImgBox />
        </div>
        <div className="absolute left-[400px] top-[350px] h-[150px] w-[197px]">
            <ImgLaptop />
        </div>
        <div className="absolute left-[30px] top-[100px] h-[120px] w-[120px]">
            <ImgColumn />
        </div>
        <div className="absolute  top-[450px] h-[280px] w-[120px]">
            <ImgCoin />
        </div>
        <div className="absolute left-[250px] top-[500px]  h-[150px] w-[197px]">
            <ImgGirl />
        </div>
    </div>
)
