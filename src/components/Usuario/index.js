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
        <div className="owner-profile">
            <a href=""><img onClick={enterImage} src={userImage} alt="" /></a>

            <div className="desc-profile">
                <a href="">
                    <span>Shrek</span>
                    <div>
                        {userName}
                        <ion-icon onClick={enterName} name="pencil-outline"></ion-icon>
                    </div>
                </a>
            </div>
        </div>
    )
}