const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, thumbnails ,title} = snippet;


  return (
    <div className="p-2 m-2 w-52 shadow-lg rounded-lg bg-slate-100">
        <img  className="rounded-lg"
        alt="movie-image" src={thumbnails.medium?.url}/>
        <ul>
            <li className="font-medium py-2  text-balance ">{title}</li>
            <li >{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  );
};

export default VideoCard;
