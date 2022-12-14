import { useState } from "react";

export const Post = ({ name, userImg, postImg, likesCount, video, likedBy, comments, date }) => {
    const [toggleBookMark, settoggleBookMark] = useState(false);
    const [toggleHeart, setToggleHeart] = useState(false);
    const [likes, setLikes] = useState(likesCount);
    const [displayHeart, setDisplayHeart] = useState(false);
    let countClick = 0;

    // Marca e desmarca o botão de salvar post
    function bookmarkToggle(e){
        e.preventDefault();
        settoggleBookMark(!toggleBookMark);
    }

    // Aumenta e diminui a quantidade de likes
    function changeLikesCount(e){
        e.preventDefault();
        if(toggleHeart){
            setLikes(likes-1);
        } else {
            setLikes(likes+1);
        }

        setToggleHeart(!toggleHeart);
    }

    // Aumenta a quantidade de like apenas quando há um duplo click na foto e ela ainda não foi curtida
    function changeLikesCountOnce(e){
        e.preventDefault();
        countClick ++;
        setTimeout(() => {
            countClick = 0;
        }, 500)

        if(countClick == 2 && !toggleHeart){
            setToggleHeart(true);
            setLikes(likes+1);

            setDisplayHeart(true);
            setTimeout(() => {
                setDisplayHeart(false);
            }, 500)
        }
    }

    return (
        <div data-test="post" className="post">
            {/* Logo and Nickname  */}
            <div className="header_post">
                <div>
                    <a>
                        <img src={`./media/imgs/${userImg}`} alt="" />
                        <div className="userName_post">{name}</div>
                    </a>
                </div>
                <a className="moreOptions_post">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
            </div>

            {/* Image */}
            <div className="post-image-area">
                {postImg ?
                    <img data-test="post-image" onClick={changeLikesCountOnce} src={`./media/imgs/${postImg}`} alt="" /> : ''
                }
                {video ?
                    <video data-test="post-image" onClick={changeLikesCountOnce} width="320" height="240" autoPlay muted>
                        <source src={`./media/videos/${video}.mp4`} type="video/mp4" />
                        <source src={`./media/videos/${video}.ogv`} type="video/ogg" />
                    </video> : ''
                }
                {displayHeart ? <ion-icon name="heart"></ion-icon> : ''}
            </div>

            {/* Actions buttons */}
            <div className="actions_post">
                <div>
                    <a>
                        <ion-icon data-test="like-post" onClick={changeLikesCount} className="icons-properties" name={`${toggleHeart ? 'heart' : 'heart-outline'}`}></ion-icon>
                    </a>
                    <a>
                        <ion-icon className="icons-properties" name="chatbubble-outline"></ion-icon>
                    </a>
                    <a>
                        <ion-icon className="icons-properties" name="paper-plane-outline"></ion-icon>
                    </a>
                </div>
                <a>
                    <ion-icon data-test="save-post" onClick={bookmarkToggle} className="icons-properties" name={`${toggleBookMark ? 'bookmark' : 'bookmark-outline'}`}></ion-icon>
                </a>
            </div>

            {/* Liked by */}
            <div className="numberOfLikes_post">
                <a><img src={`./media/imgs/${likedBy.img}`} alt="" /></a>

                Curtido por<span> {'\u00A0'} <a>{likedBy.name}</a> {'\u00A0'}</span> e <span>{'\u00A0'} outras <a data-test="likes-number">{likes}</a> pessoas{'\u00A0'}</span>
            </div>

            {/* Comments */}

            <div className="comments-area">
                <div className="view-all-comments">
                    <a>Ver todos os {comments.qnt} comentários</a>
                </div>

                <div className="comments">
                    {comments.comment.map((c, i) =>
                        <div key={i} className="comment">
                            <div>
                                <a> <div className="user-nicknamen">{c.nick}</div>
                                </a>
                                {c.text}
                            </div>
                            <a><ion-icon name="heart-outline"></ion-icon></a>
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
                <a className="emojis"><ion-icon name="happy-outline"></ion-icon></a>
                <input type="text" placeholder="Adicione um comentário..." />
                <a className="button">Publicar</a>
            </div>
        </div>
    );
}