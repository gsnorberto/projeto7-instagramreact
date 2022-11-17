export const Posts = () => {
    return (
        <div className="feed">
            {/* POST */}
            <div className="post">
                {/* Logo and Nickname  */}
                <div className="header_post">
                    <div>
                        <a href="">
                            <img src="./media/imgs/avatar2.png" alt="" />
                            <div className="userName_post">dona_Benta</div>
                        </a>
                    </div>
                    <a href="" className="moreOptions_post">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </a>
                </div>

                {/* Image */}
                <a href="">
                    <img src="./media/imgs/praia.png" alt="" />
                </a>

                {/* Actions buttons */}
                <div className="actions_post">
                    <div>
                        <a href="">
                            <ion-icon className="icons-properties" name="heart-outline"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon className="icons-properties" name="chatbubble-outline"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon className="icons-properties" name="paper-plane-outline"></ion-icon>
                        </a>
                    </div>
                    <a href="">
                        <ion-icon className="icons-properties" name="bookmark-outline"></ion-icon>
                    </a>
                </div>

                {/* Liked by */}
                <div className="numberOfLikes_post">
                    <a href=""><img src="./media/imgs/lateral1.png" alt="" /></a>

                    Curtido por<span> {'\u00A0'} <a href="">Dustin</a> {'\u00A0'}</span> e <span>{'\u00A0'}<a
                        href="">outras pessoas</a>{'\u00A0'}</span>
                </div>

                {/* Comments */}
                <div className="comments-area">
                    <div className="view-all-comments">
                        <a href="">Ver todos os 32 comentários</a>
                    </div>
                    <div className="comments">
                        <div className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">snMarcus</div>
                                </a>
                                Nossa, perfeito!!!
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>
                        <div className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">Dustin</div>
                                </a>
                                Que praia linda
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>

                    </div>

                </div>
                {/* Publication date */}
                <div className="publication-date">
                    Há 1 hora
                </div>
                {/* Comment input */}
                <div className="comment-input">
                    <a className="emojis" href=""><ion-icon name="happy-outline"></ion-icon></a>
                    <input type="text" placeholder="Adicione um comentário..." />
                    <a className="button" href="">Publicar</a>
                </div>
            </div>
            {/* POST */}
            <div className="post">
                {/* Logo and Nickname  */}
                <div className="header_post">
                    <div>
                        <a href="">
                            <img src="./media/imgs/avatar0.png" alt="" />
                            <div className="userName_post">Mike</div>
                        </a>
                    </div>
                    <a href="" className="moreOptions_post">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </a>
                </div>

                {/* Image */}
                <a href="">
                    <video width="320" height="240" autoPlay muted>
                        <source src="./media/videos/video.mp4" type="video/mp4" />
                        <source src="./media/videos/video.ogv" type="video/ogg" />
                    </video>
                </a>

                {/* Actions buttons */}
                <div className="actions_post">
                    <div>
                        <a href="">
                            <ion-icon className="icons-properties" name="heart-outline"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon className="icons-properties" name="chatbubble-outline"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon className="icons-properties" name="paper-plane-outline"></ion-icon>
                        </a>
                    </div>
                    <a href="">
                        <ion-icon className="icons-properties" name="bookmark-outline"></ion-icon>
                    </a>
                </div>

                {/* Liked by */}
                <div className="numberOfLikes_post">
                    <a href=""><img src="./media/imgs/lateral2.png" alt="" /></a>

                    Curtido por<span> {'\u00A0'} <a href="">Will</a> {'\u00A0'}</span> e <span>{'\u00A0'}<a
                        href="">outras pessoas</a>{'\u00A0'}</span>
                </div>

                {/* Comments */}
                <div className="comments-area">
                    <div className="view-all-comments">
                        <a href="">Ver todos os 321 comentários</a>
                    </div>
                    <div className="comments">
                        <div className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">dona_benta</div>
                                </a>
                                Ótima vídeo!!
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>
                        <div className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">Mario_Bros</div>
                                </a>
                                Gostei muito desse vídeo
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>

                    </div>

                </div>
                {/* Publication date */}
                <div className="publication-date">
                    Há 2 dias
                </div>
                {/* Comment input */}
                <div className="comment-input">
                    <a className="emojis" href=""><ion-icon name="happy-outline"></ion-icon></a>
                    <input type="text" placeholder="Adicione um comentário..." />
                    <a className="button" href="">Publicar</a>
                </div>
            </div>
            {/* POST */}
            <div className="post">
                {/* Logo and Nickname  */}
                <div className="header_post">
                    <div>
                        <a href="">
                            <img src="./media/imgs/avatar3.png" alt="" />
                            <div className="userName_post">avatar</div>
                        </a>
                    </div>
                    <a href="" className="moreOptions_post">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </a>
                </div>

                {/* Image */}
                <a href="">
                    <img src="./media/imgs/praia2.png" alt="" />
                </a>

                {/* Actions buttons */}
                <div className="actions_post">
                    <div>
                        <a href="">
                            <ion-icon className="icons-properties" name="heart-outline"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon className="icons-properties" name="chatbubble-outline"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon className="icons-properties" name="paper-plane-outline"></ion-icon>
                        </a>
                    </div>
                    <a href="">
                        <ion-icon className="icons-properties" name="bookmark-outline"></ion-icon>
                    </a>
                </div>

                {/* Liked by */}
                <div className="numberOfLikes_post">
                    <a href=""><img src="./media/imgs/lateral4.png" alt="" /></a>

                    Curtido por<span> {'\u00A0'} <a href="">Billy</a> {'\u00A0'}</span> e <span>{'\u00A0'}<a
                        href="">outras pessoas</a>{'\u00A0'}</span>
                </div>

                {/* Comments */}
                <div className="comments-area">
                    <div className="view-all-comments">
                        <a href="">Ver todos os 645 comentários</a>
                    </div>
                    <div className="comments">
                        <div className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">sn_Marcus</div>
                                </a>
                                Bela imagem!!!
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>
                        <div className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">paulo_souza</div>
                                </a>
                                Linda foto. Top demais
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>

                    </div>

                </div>
                {/* Publication date */}
                <div className="publication-date">
                    Há 7 horas
                </div>
                {/* Comment input */}
                <div className="comment-input">
                    <a className="emojis" href=""><ion-icon name="happy-outline"></ion-icon></a>
                    <input type="text" placeholder="Adicione um comentário..." />
                    <a className="button" href="">Publicar</a>
                </div>
            </div>
        </div>
    );
}