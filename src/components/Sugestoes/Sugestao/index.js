export const Sugestao = ({name, desc, img}) => {
    return (
        <div className="suggestion-profile">
            <a href=""> <img src={`./media/imgs/${img}`} alt="" /> </a>

            <div>
                <div className="desc-profile">
                    <a href="">
                        <span>{name}</span>
                    </a>
                    {desc}
                </div>
                <a href="">Seguir</a>
            </div>
        </div>
    )
}