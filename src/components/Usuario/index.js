import { useState } from "react";

export const Usuario = () => {
    const [userName, setUserName] = useState('Fiona');
    const [userImage, setUserImage] = useState('./media/imgs/perfil.png');
    let newUserName;
    let newUserImage;

    function enterName(e) {
        e.preventDefault();

        let aux = prompt("Qual seu nome?");
        if (aux) {
            newUserName = aux;
            setUserName(newUserName);
        }
    }

    function enterImage(e) {
        e.preventDefault();

        let aux = prompt("Insira a URL de uma imagem");
        if (aux) {
            newUserImage = aux;
            setUserImage(newUserImage);
        }
    }

    return (
        <div data-test="user" className="owner-profile">
            <a><img data-test="profile-image" onClick={enterImage} src={userImage} alt="" /></a>

            <div className="desc-profile">
                <a>
                    <span>Shrek</span>
                    <div>
                        <span data-test="name">{userName}</span>
                        <ion-icon data-test="edit-name" onClick={enterName} name="pencil-outline"></ion-icon>
                    </div>
                </a>
            </div>
        </div>
    )
}