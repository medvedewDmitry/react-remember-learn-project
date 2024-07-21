import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState} from "react";
import WayToTeach from "./WayToTeach.jsx";

export default function EffectsSection() {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])

    async function fetchPosts() {
        setIsLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json()
        setPosts(posts)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])
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

                <h3 style={{marginTop: 10}}>Список постов</h3>
                {
                    isLoading && <p>Идет загрузка...</p>
                }
                {
                    !isLoading && posts && <ul>
                        {posts.map((post) => {
                            return (
                                <WayToTeach
                                    key={post.id}
                                    title={post.title}
                                    desc={post.body}
                                />
                            )
                        })}
                    </ul>
                }
            </section>
        </>
    )
}