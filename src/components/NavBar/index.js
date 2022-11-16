import React from 'react';

export const NavBar = () =>{
    return (
        <header>
        <div class="container">
            {/* Instagram logo*/}
            <div class="logo">
                <a href="">
                    <ion-icon class="icons-properties" name="logo-instagram"></ion-icon>
                </a>
                <a href="">
                    <img src="./assets/icons/logo.png" alt="logo do instagram" />
                </a>
                <a class="mobile-only" href="">
                    <ion-icon class="icons-properties" name="paper-plane-outline"></ion-icon>
                </a>
            </div>

            {/* Search Box*/}
            <input type="text" placeholder="Pesquisar" />

            {/* Right Side Icons*/}
            <div class="icons_header icons-properties">
                <a href="">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="compass-outline"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="person-outline"></ion-icon>
                </a>
            </div>
        </div>
    </header>
    )
}