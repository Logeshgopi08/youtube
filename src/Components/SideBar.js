import { useSelector } from "react-redux";

const SideBar = () => {
   const sidebar = useSelector((store)=>store.sidebar.ismenuOpen);

   if(!sidebar) return null;

  return <div className="col-span-1 shadow-lg pl-5 h-full  ">
    
    <ul className="py-2">
        <li >Home</li>
        <li className="py-1">Shorts</li>
        <li  className="py-1">Video</li>
        <li  className="py-1">Trailer</li>
        <li>Movies</li>
    </ul>


    <h1 className="text-xl font-bold">Subscription</h1>
    <ul className="py-1">
        <li >Music</li>
        <li className="py-1">Games</li>
        <li  className="py-1">Sports</li>
        <li>Live</li>
    </ul>
    <h1 className="text-xl font-bold">Watch later</h1>
    <ul className="py-1">
        <li >Music</li>
        <li className="py-1">Games</li>
        <li  className="py-1">Sports</li>
        <li>Live</li>
    </ul>
  </div>;
};

export default SideBar;
