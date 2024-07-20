import logo from '/src/assets/logo-name.svg'
import {useState} from "react";
export default function Header() {
    const [nowTime, setNowTime] = useState(new Date())
    setInterval(() => {
        setNowTime(new Date())
    }, 1000)
    const altName = 'Логотип'
    return (
        <header>
            <img src={logo} alt={altName}/>
            {/*<h3>Заголовок шапки</h3>*/}
            <span>Время сейчас: {nowTime.toLocaleTimeString('ru')}</span>
        </header>
    )
}