import { Usuario } from "../Usuario";
import { Sugestoes } from "../Sugestoes";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <Usuario />
                <Sugestoes />
                
                <div className="info">
                    <div>
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma
                    </div>
                    <div>
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </div>
    );
}