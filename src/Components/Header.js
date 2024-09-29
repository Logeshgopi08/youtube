/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../utlis/sidebarSlice";
import { useEffect, useState } from "react";
import { addSearchQuery } from "../utlis/searchSlice";
import { json } from "react-router-dom";

const Header = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showsuggestion, setShowSeggestion] = useState(false);

  const cache = useSelector((store)=>store.searchQuery);

  const dispatch = useDispatch();

  const getSuggestion = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchquery
    );
    const response = await data.json();
    console.log(response[1]);
    setSuggestion(response[1]);

    dispatch(addSearchQuery({
      [searchquery] :response[1]
    }));
  };

  useEffect(() => {

     const timer = setTimeout(()=> {
      if(cache[searchquery]){
        setSuggestion(cache[searchquery]);
      }else{
        getSuggestion();
      }
      
    },200);

    return (()=>{
      clearTimeout(timer);
    })
    
  }, [searchquery]);

  const toogleSideBar = () => {
    dispatch(changeMenu());
  };
  return (
    <div className=" grid grid-flow-col items-center  shadow-lg ">
      <div className=" grid grid-flow-col items-center col-span-1 ">
        <img
          className="w-10 pl-3 cursor-pointer"
          onClick={() => toogleSideBar()}
          alt="menu logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNEBO2OUKQjP-RSbIZae3jIq76g3rMrn9vQ&s"
        />
        <img
          className="w-36"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ6Ng9VkCd9fx4Zve31ePZmRDM7eJlNdLLFf5-J8nEbcftV2gpX-hPO_n3Pwm0aYJEQ&usqp=CAU"
        />
      </div>
      <div className=" col-span-10  ml-16">
        <input value={searchquery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={() => setShowSeggestion(true)}
          onBlur={() => setShowSeggestion(false)}
          className="border border-gray-800  w-1/2 px-5 py-2 rounded-l-full "
          type="text"
        />

        <button className="px-3 border  border-gray-800  py-2 rounded-r-full bg-red-600">
          Search
        </button>
        {showsuggestion && (
          <div className="absolute bg-white w-[26rem] px-13 mx-2 rounded-lg">
            <ul>
              {suggestion.map((s) => {
                return (
                  <li className="pl-4 py-2 hover:bg-gray-200" key={s}>
                    {" "}
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className=" col-span-1">
        <img
          className="w-16"
          alt="user_logo "
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
