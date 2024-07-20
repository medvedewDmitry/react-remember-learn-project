/**
 * Компонент секции с заголовком первого уровня
 * @param title
 * @returns {JSX.Element}
 */
export default function HeadingFirstSection({title}) {
    return (
        <section>
            <h1 className={'centered'}>{title}</h1>
        </section>
    )
}