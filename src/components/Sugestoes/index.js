import { Sugestao } from "./Sugestao"
import { suggestionData } from "../../data/suggestion-data"

export const Sugestoes = () => {
    return (
        <div className="suggestions">
            <div className="title-suggestions">
                Sugestões para você
                <a href="">Ver tudo</a>
            </div>

            {suggestionData.map((sug, i) => <Sugestao key={i} name={sug.name} desc={sug.desc} img={sug.img}/>)}
        </div>
    )
}