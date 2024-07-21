/**
 * Корневой компонент приложения
 *
 * Подключенные компоненты:
 * Header - шапка сайта
 * TeachingSection - секция с подходами обучения
 * DifferencesSection - секция с отличиями от других
 */

import {ways, differences} from "./data.js";
import {Fragment, useState} from "react";
// components
import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import HeadingFirstSection from "./components/HeadingFirstSection.jsx";
import TabSection from "./components/TabSection/TabSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import EffectsSection from "./components/EffectsSection.jsx";


export default function App() {
    const [tab, setTab] = useState('main')
    const changeTab = (tab) => {
        setTab(tab)
    }
    return (
        <Fragment>
            <Header/>
            <main>
                <div id="modal"></div>
                <TabSection
                    selectedTab={tab}
                    changeTab={changeTab}
                />

                {
                    tab === 'main' && <>
                        <HeadingFirstSection title={'Новый заголовок'}/>
                        <TeachingSection ways={ways}/>
                        <DifferencesSection differences={differences}/>
                    </>
                }
                {
                    tab === 'feedback' && <>
                        <FeedbackSection/>
                    </>
                }
                {
                    tab === 'effects' && <>
                        <EffectsSection/>
                    </>
                }

            </main>
        </Fragment>
    )
}


