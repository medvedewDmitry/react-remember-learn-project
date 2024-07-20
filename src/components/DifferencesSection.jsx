/**
 * Секция с отличиями от других
 */

import Button from "./Button/Button.jsx";
import {useState} from "react";

export default function DifferencesSection({differences}) {
    const [contentType, setContentType] = useState('way')
    const handleClick = (type) => {
        setContentType(type)
    }

    return (
        <section>
            <h3>Чем мы отличаемся от других?</h3>
            <Button onClick={() => handleClick('way')} isActive={contentType === 'way'}>Подход</Button>
            <Button onClick={() => handleClick('easy')} isActive={contentType === 'easy'}>Доступность</Button>
            <Button onClick={() => handleClick('program')}
                    isActive={contentType === 'program'}>Программа</Button>
            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}