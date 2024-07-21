import logo from '/src/assets/logo-name.svg'
import {useEffect, useState} from "react";
import classes from "./Header.module.css";
export default function Header() {
    const [nowTime, setNowTime] = useState(new Date())
    useEffect(()=> {
        const intervalTime = setInterval(() => {
            setNowTime(new Date())
        }, 1000)

        return () => {
            // Очистка переменных при уничтожении компонента
            clearInterval(intervalTime);
        }
    }, []) // Если список зависимостей пустой, то эффект вызовется только при инициализации, так как не от чего не зависит

    const altName = 'Логотип'
    return (
        <header className={classes.header}>
            <img src={logo} alt={altName}/>
            <span>Время сейчас: {nowTime.toLocaleTimeString('ru')}</span>
        </header>
    )
}