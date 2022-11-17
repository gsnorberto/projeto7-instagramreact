import { Storie } from "./Storie"
import { storieData } from "../../data/storie-data"

export const Stories = () => {
    return (
        <div className="stories">
            <div className="stories_slider">
                {storieData.map((user, i) => <Storie key={i} img={user.img} name={user.name} />)}
            </div>

            {/* Slider Button */}
            <a href="">
                <ion-icon className="button-right" name="chevron-forward-circle"></ion-icon>
            </a>
        </div>
    )
}