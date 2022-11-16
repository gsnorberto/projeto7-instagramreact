import { Storie } from "./Storie"

export const Stories = () => {
    const stories_Users = [
        {name: 'Mike', img: 'avatar0.png'}, 
        {name: 'dona_Benta', img: 'avatar2.png'},
        {name: 'avatar', img: 'avatar3.png'},
        {name: 'AntonietaMS', img: 'avatar4.png'},
        {name: 'dogão', img: 'avatar5.png'},
        {name: 'gatão', img: 'avatar6.png'},
        {name: 'Rau_fotografias', img: 'avatar7.png'},
        {name: 'Mario Bros', img: 'avatar8.png'}
    ]

    return (
        <div class="stories">
            <div class="stories_slider">
                {stories_Users.map((user) => <Storie img={user.img} name={user.name} />)}
            </div>

            {/* Slider Button */}
            <a href="">
                <ion-icon class="button-right" name="chevron-forward-circle"></ion-icon>
            </a>
        </div>
    )
}