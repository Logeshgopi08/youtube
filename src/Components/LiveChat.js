import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { addLiveChatMsg } from "../utlis/Chatslice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utlis/helper";

const LiveChat = () => {
   
    const [liveMessage,setLiveMessage] = useState('');
    const chatMessage = useSelector((store)=>store.chat.messages);

    const dispatch = useDispatch();


    useEffect(()=>{
        const timer = setInterval(()=>{
          
            dispatch(addLiveChatMsg({
               name:generateRandomName(),
               message:makeRandomMessage(20)
            }))
        },2000);

        return (()=>clearInterval(timer));
    },[]);

    if(!chatMessage) return null;

  return (
    <div className=" h-80">
        <h1 className="text-2xl font-medium p-4">Live Chats</h1>
      <div className="bg-gray-200 h-screen overflow-y-scroll no-scrollbar  flex flex-col-reverse ">
        {chatMessage.map((c,i)=>{
            return  <ChatMessage key={i} data={c}/>
        })}
      </div>
       <div></div>
    </div>
  );
};


export default LiveChat;
