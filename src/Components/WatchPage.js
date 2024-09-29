import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentCont";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-9/12 px-2 py-2">
      <iframe className="w-full "
        
        height="400"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"/&autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <CommentContainer/>
      </div>
    </div>
  );
};

export default WatchPage;
