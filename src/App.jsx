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

// components
import Header from "./components/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";


export default function App() {


    return (
        <div>
            <Header/>
            <main>
                {/* секция с подходами в обучении */}
                <TeachingSection ways={ways}/>

                {/* секция с отличиями от других */}
                <DifferencesSection
                    differences={differences}
                />
            </main>
        </div>
    )
}


