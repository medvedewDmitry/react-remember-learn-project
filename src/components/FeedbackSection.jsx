import Button from "./Button/Button.jsx";
import {useState} from "react";

/**
 * Компонент для демонстрации связывания значения с его рендрингом
 * @returns {JSX.Element}
 */
function StateVsRef() {
    const [value, setValue] = useState('');
    const changeValue = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <h3>Введенное значение: {value}</h3>
            <input type="text" value={value} onChange={changeValue}/>
        </div>
    )
}

/**
 * Компонент страницы обратной связи
 * @returns {JSX.Element}
 */
export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasErr: false,
        reason: 'help'
    })
    const changeName = (event) => {
        setForm(prev => ({
            ...prev,
            name: event.target.value,
            hasErr: event.target.value.trim().length === 0
        }))
    }
    const changeReason = (event) => {
        setForm(prev => ({
            ...prev,
            reason: event.target.value,
        }))
    }
    return (
        <>
            <h1>Свяжитесь с нами</h1>
            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text"
                       id="name"
                       className={'control'}
                       value={form.name}
                       style={{
                           border: form.hasErr ? '1px solid red' : null
                       }}
                       onChange={changeName}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason"
                        className={'control'}
                        value={form.reason}
                        onChange={changeReason}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={form.hasErr}>Отправить</Button>
            </form>
            <hr/>
            <StateVsRef/>
        </>
    )
}