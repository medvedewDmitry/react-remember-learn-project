import Header from "./components/Header.jsx";
import {ways} from "./data.js";
import Button from "./components/Button/Button.jsx";

function WayToTeach({title, desc}) {
    return (
        <li>
            <p><strong>{title}</strong> {desc}</p>
        </li>
    )
}

export default function App() {
    const handleClick = (event) => {
        const button = document.getElementById( event.target.id);
        button.classList.toggle("active");
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
                    <Button buttonId={1}
                            onClick={handleClick}
                    >
                        Важная кнопка
                    </Button>
                </section>
            </main>
        </div>
    )
}


