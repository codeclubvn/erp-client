import Person from '../../icons/loginImages/person.svg'
import Laptop from '../../icons/loginImages/laptop.svg'
import Girf from '../../icons/loginImages/girl.svg'
import Number from '../../icons/loginImages/number.svg'
import Box from '../../icons/loginImages/box.svg'
import Coin from '../../icons/loginImages/coin.svg'
import Column from '../../icons/loginImages/column.svg'

export const LoginImages = () => (
    <div className="relative h-[100vh] w-[650px] bg-[url('./src/icons/loginImages/Union.svg')] bg-cover">
        <img
            src={Number}
            className="absolute left-[112px] top-[30px] h-[60px] w-[130px]"
            alt=""
        />
        <img
            src={Person}
            className="absolute left-[60px] top-[60px] h-[502px] w-[400px]"
            alt=""
        />
        <img
            src={Box}
            className="absolute left-[300px] top-[100px] h-[160px] w-[197px]"
            alt=""
        />
        <img
            src={Laptop}
            className="absolute left-[400px] top-[350px] h-[150px] w-[197px]"
            alt=""
        />
        <img
            src={Column}
            className="absolute left-[30px] top-[100px] h-[120px] w-[120px]"
            alt=""
        />
        <img
            src={Coin}
            className="absolute  top-[450px] h-[280px] w-[120px]"
            alt=""
        />
        <img
            src={Girf}
            className="absolute left-[250px] top-[500px]  h-[150px] w-[197px]"
            alt=""
        />
    </div>
)
