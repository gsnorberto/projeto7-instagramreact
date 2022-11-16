import { Stories } from "../Stories"
import { Posts } from "../Posts"
import { Sidebar } from "../SideBar"

export const Corpo = () => {
    return(
        <main>
        <div class="container">
            <div class="main-content">
                <Stories />
                <Posts />
            </div>
            
            <Sidebar />
        </div>

        {/* Mobile Devices */}
        <div class="bottom-bar">
            <a href="">
                <ion-icon name="home"></ion-icon>
            </a>
            <a href="">
                <ion-icon name="search"></ion-icon>
            </a>
            <a href="">
                <ion-icon name="add-circle-outline"></ion-icon>
            </a>
            <a href="">
                <ion-icon name="heart-outline"></ion-icon>
            </a>
            <a href="">
                <ion-icon name="person-outline"></ion-icon>
            </a>
        </div>
    </main>
    )
}