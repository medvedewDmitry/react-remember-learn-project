import Button from "../Button/Button.jsx";
import './TabSection.scss'
export default function TabSection({selectedTab, changeTab}) {
    return (
        <section className={'tab-list'}>
            <Button onClick={() => changeTab('main')} isActive={selectedTab === 'main'}>Главная</Button>
            <Button onClick={() => changeTab('feedback')} isActive={selectedTab === 'feedback'}>Обратная связь</Button>
            <Button onClick={() => changeTab('effects')} isActive={selectedTab === 'effects'}>Эффекты</Button>
        </section>
    )
}