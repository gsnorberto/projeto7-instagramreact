export const Storie = ({img, name}) => {
    return (
        <div className="story">
            <a href="">
                <div className="bg-img">
                    <img src={`./media/imgs/${img}`} alt="" />
                </div>
                <div className="userName_story">{name}</div>
            </a>
        </div>
    );
}