import { useEffect, useState } from "react";
import { YOUTUBE_BASE_API } from "../utlis/constant";
import VideoCard from "./VideoCard";

const VideoContainer = ()=>{
    const [videos,setVideos] = useState([]);


    useEffect(()=>{
        getYoutubeVideos();
    },[]);

    const getYoutubeVideos = async()=>{
        const data = await fetch(YOUTUBE_BASE_API);
        const json = await data.json();
        setVideos(json.items);
        
    }

    
    return (
        <div className="flex  flex-wrap h-screen ">
            {
                videos.map((video)=>{
                  return  <VideoCard key={video.id} info = {video}/>
                })
            }
        </div>
    );
}

export default VideoContainer;