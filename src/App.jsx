import Header from "./components/Header.jsx";
import {ways} from "./data.js";
function WayToTeach({title, desc}) {
    return (
        <li>
            <p><strong>{title}</strong> {desc}</p>
        </li>
    )
}

export default function App() {

    return (
        <div>
            <Header/>
            <main>
              <section>
                  <ul>
                      {ways.map((way) => {
                          return (
                              <WayToTeach
                              title={way.title}
                              desc={way.description}
                          />
                          )
                      })}
                  </ul>
              </section>
            </main>
        </div>
    )
}


