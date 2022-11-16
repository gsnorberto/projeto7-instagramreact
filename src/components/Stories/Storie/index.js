export const Storie = ({img, name}) => {
    return (
        <div class="story">
            <a href="">
                <div class="bg-img">
                    <img src={`./media/imgs/${img}`} alt="" />
                </div>
                <div class="userName_story">{name}</div>
            </a>
        </div>
    );
}