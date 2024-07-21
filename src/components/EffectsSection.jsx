import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useState} from "react";

export default function EffectsSection() {
    const [isShowModal, setIsShowModal] = useState(false)

    const toggleModal = () => {
        setIsShowModal(!isShowModal)
    }
    return (
        <>
            <section>
                <h3>useEffects</h3>
                <Button onClick={toggleModal}>Открыть информацию</Button>

                <Modal open={isShowModal}>
                    <h4>Открыто модальное окно</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur cum, cupiditate
                        doloremque esse explicabo impedit minima modi nam nobis odit qui quia quo ratione repellat sequi
                        soluta tempore voluptatem.</p>
                    <Button onClick={toggleModal}>Закрыть</Button>
                </Modal>


            </section>
        </>
    )
}