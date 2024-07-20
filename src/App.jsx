import Header from "./components/Header.jsx";
import {ways, differences} from "./data.js";
import Button from "./components/Button/Button.jsx";
import {useState} from "react";

function WayToTeach({title, desc}) {
    return (
        <li>
            <p><strong>{title}</strong> {desc}</p>
        </li>
    )
}

export default function App() {
    const [contentType, setContentType] = useState('way')
    const handleClick = (type) => {
        console.log("handleClick type", type)
        setContentType(type)
    }
    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Новый блок с динамическим списком</h3>
                    <ul>
                        {ways.map((way) => {
                            return (
                                <WayToTeach
                                    key={way.id}
                                    title={way.title}
                                    desc={way.description}
                                />
                            )
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Новый блок с кнопками</h3>
                    <Button onClick={() => handleClick('way')} isActive={contentType === 'way'}>Подход</Button>
                    <Button onClick={() => handleClick('easy')} isActive={contentType === 'easy'}>Доступность</Button>
                    <Button onClick={() => handleClick('program')} isActive={contentType === 'program'}>Программа</Button>
                    {!contentType && <p>Нажми на кнопку</p>}
                    {contentType && <p>{differences[contentType]}</p>}
                </section>
            </main>
        </div>
    )
}


