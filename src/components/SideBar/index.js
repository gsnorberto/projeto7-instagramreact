
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <div className="owner-profile">
                    <a href=""><img src="./media/imgs/perfil.png" alt="" /></a>

                    <div className="desc-profile">
                        <a href="">
                            <span>Shrek</span>
                            Fiona
                        </a>
                    </div>
                </div>

                <div className="suggestions">
                    <div className="title-suggestions">
                        Sugestões para você
                        <a href="">Ver tudo</a>
                    </div>

                    <div className="suggestion-profile">
                        <a href=""> <img src="./media/imgs/lateral1.png" alt="" /> </a>

                        <div>
                            <div className="desc-profile">
                                <a href="">
                                    <span>Dustin</span>
                                </a>
                                Novo no Instagram
                            </div>
                            <a href="">Seguir</a>
                        </div>
                    </div>
                    <div className="suggestion-profile">
                        <a href=""><img src="./media/imgs/lateral2.png" alt="" /></a>

                        <div>
                            <div className="desc-profile">
                                <a href="">
                                    <span>Will</span>
                                </a>
                                Segue você
                            </div>
                            <a href="">Seguir</a>
                        </div>
                    </div>
                    <div className="suggestion-profile">
                        <a href="">
                            <img src="./media/imgs/lateral3.png" alt="" />
                        </a>
                        <div>
                            <div className="desc-profile">
                                <a href="">
                                    <span>Eleven</span>
                                </a>
                                Novo no Instagram
                            </div>
                            <a href="">Seguir</a>
                        </div>
                    </div>
                    <div className="suggestion-profile">
                        <a href="">
                            <img src="./media/imgs/lateral4.png" alt="" />
                        </a>
                        <div>
                            <div className="desc-profile">
                                <a href="">
                                    <span>Billy</span>
                                </a>
                                Segue você
                            </div>
                            <a href="">Seguir</a>
                        </div>
                    </div>
                    <div className="suggestion-profile">
                        <a href="">
                            <img src="./media/imgs/lateral5.png" alt="" />
                        </a>
                        <div>
                            <div className="desc-profile">
                                <a href="">
                                    <span>Mike</span>
                                </a>
                                Segue você
                            </div>
                            <a href="">Seguir</a>
                        </div>
                    </div>
                </div>
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