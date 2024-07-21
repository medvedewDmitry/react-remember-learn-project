/**
 * Компонент модального окна
 * @param children - слот с контентом
 * @returns {JSX.Element}
 */
import './Modal.scss'
import {createPortal} from "react-dom";
import {useRef, useEffect} from "react";
export default function Modal({children, open}) {
    const dialog = useRef();
    useEffect(() => {
        if (open) {
            dialog.current.showModal() // API тега dialog в браузере
        } else {
            dialog.current.close()
        }
    }, [open]) // список зависимостей от которых зависит выполнение эффекта


    return createPortal(
        <dialog ref={dialog}>{children}</dialog>,
        document.getElementById('modal')
    )
}