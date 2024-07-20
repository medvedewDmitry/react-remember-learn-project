import logo from '/src/assets/logo-name.svg'
export default function Header() {
    const nowTime = new Date().toLocaleTimeString('ru');
    const altName = 'Логотип'
    return (
        <header>
            <img src={logo} alt={altName}/>
            {/*<h3>Заголовок шапки</h3>*/}
            <span>Время сейчас: {nowTime}</span>
        </header>
    )
}