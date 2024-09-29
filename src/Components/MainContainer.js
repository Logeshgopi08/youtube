import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
    return (
        <div className="w-11/12 h-screen  overflow-y-scroll  no-scrollbar">
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default MainContainer;