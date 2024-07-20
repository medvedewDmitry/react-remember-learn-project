import Button from "./Button/Button.jsx";

export default function DifferencesSection({differences, contentType, handleClick}) {
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