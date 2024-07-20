
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection({ways}) {
    return (
        <section>
            <h3>Наш подход к обучению</h3>
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
    )
}