export const Post = ({ name, userImg, postImg, video, likedBy, comments, date }) => {
    return (
        <div className="post">
            {/* Logo and Nickname  */}
            <div className="header_post">
                <div>
                    <a href="">
                        <img src={`./media/imgs/${userImg}`} alt="" />
                        <div className="userName_post">{name}</div>
                    </a>
                </div>
                <a href="" className="moreOptions_post">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
            </div>

            {/* Image */}
            <a href="">
                {postImg ?
                    <img src={`./media/imgs/${postImg}`} alt="" /> : ''
                }
                {video ?
                    <video width="320" height="240" autoPlay muted>
                        <source src={`./media/videos/${video}.mp4`} type="video/mp4" />
                        <source src={`./media/videos/${video}.ogv`} type="video/ogg" />
                    </video> : ''
                }
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
                <a href=""><img src={`./media/imgs/${likedBy.img}`} alt="" /></a>

                Curtido por<span> {'\u00A0'} <a href="">{likedBy.name}</a> {'\u00A0'}</span> e <span>{'\u00A0'}<a
                    href="">outras pessoas</a>{'\u00A0'}</span>
            </div>

            {/* Comments */}

            <div className="comments-area">
                <div className="view-all-comments">
                    <a href="">Ver todos os {comments.qnt} comentários</a>
                </div>

                <div className="comments">
                    {comments.comment.map((c, i) =>
                        <div key={i} className="comment">
                            <div>
                                <a href=""> <div className="user-nicknamen">{c.nick}</div>
                                </a>
                                {c.text}
                            </div>
                            <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                        </div>
                    )}
                </div>

            </div>
            {/* Publication date */}
            <div className="publication-date">
                Há ${date}
            </div>
            {/* Comment input */}
            <div className="comment-input">
                <a className="emojis" href=""><ion-icon name="happy-outline"></ion-icon></a>
                <input type="text" placeholder="Adicione um comentário..." />
                <a className="button" href="">Publicar</a>
            </div>
        </div>
    );
}