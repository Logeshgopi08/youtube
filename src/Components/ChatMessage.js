
const ChatMessage = ({data})=>{
    console.log(data);
    
    return (
        <div className="flex items-center bg-white mx-1 rounded-lg my-1 ">
            <img className="h-8 mx-2"
             alt="db" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
             <div>
                <h1 className="text-lg font-bold">{data.name}</h1>
                <p>{data.message}</p>
             </div>
        </div>
    );
}

export default ChatMessage;