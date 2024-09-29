import { useEffect, useState } from "react";
import { YOUTUBE_BASE_API } from "../utlis/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_BASE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex  flex-wrap h-screen ml-10 ">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v="+video.id} key={video.id}>
            <VideoCard  info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
