/**
 * Корневой компонент приложения
 *
 *
 * Подключенные компоненты:
 * Header - шапка сайта
 * TeachingSection - секция с подходами обучения
 * DifferencesSection - секция с отличиями от других
 */

import {ways, differences} from "./data.js";
import {Fragment} from "react";
// components
import Header from "./components/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import HeadingFirstSection from "./components/HeadingFirstSection.jsx";


export default function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                {/* Компонент секции с заголовком первого уровня */}
                <HeadingFirstSection title={'Новый заголовок'}/>
                {/* секция с подходами в обучении */}
                <TeachingSection ways={ways}/>

                {/* секция с отличиями от других */}
                <DifferencesSection
                    differences={differences}
                />
            </main>
        </Fragment>
    )
}


