import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentCont";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" flex h-screen " >
    <div className="w-9/12 px-2 py-2 h-screen ">
      <iframe className="w-full "
        
        height="350"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"/&autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div  className="">
        <div className="h-64 overflow-y-scroll no-scrollbar">
        <CommentContainer/>
        </div>
      </div>
    </div>
    <div className="h-72 bg-gray-200 w-3/12">
      <LiveChat/>
    </div>
    </div>
  );
};

export default WatchPage;
