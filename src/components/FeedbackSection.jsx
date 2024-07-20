import Button from "./Button/Button.jsx";
import {useState} from "react";

/**
 * Компонент страницы обратной связи
 * @returns {JSX.Element}
 */
export default function FeedbackSection() {
    const [name, setName] = useState('')
    const [hasErr, setHasErr] = useState(false)
    const [reason, setReason] = useState('help')
    const changeName = (event) => {
        setName(event.target.value)
        setHasErr(event.target.value.trim().length === 0)
    }
    const changeReason = (event) => {
        setReason(event.target.value)
    }
    return (
        <>
            <h1>Свяжитесь с нами</h1>
            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text"
                       id="name"
                       className={'control'}
                       value={name}
                       style={{
                           border: hasErr ?'1px solid red' : null
                       }}
                       onChange={changeName}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason"
                        className={'control'}
                        value={reason}
                        onChange={changeReason}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={hasErr}>Отправить</Button>
            </form>
        </>
    )
}