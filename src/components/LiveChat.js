import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API polling
            dispatch(addMessage({
                name: generateRandomNames(),
                message: makeRandomMessage(13)
            }));
        }, 2000);
        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-slate-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {/* don't use INDEXES as key*/}
                <div>
                    {chatMessages.map((chat, index) => <ChatMessage key={index} name={chat.name} message={chat.message} />)}
                </div>
            </div>
            <form className="w-full p-2 ml-2 border border-black" onSubmit={(e) => {
                e.preventDefault();
                console.log("On Form Submit", liveMessage)
                dispatch(addMessage({
                    name: "Shubhangi Modi",
                    message: liveMessage
                }))
                setLiveMessage("");
                }}>
                <input className="px-2 w-96" type="text" value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value)}}/>
                <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>
        </>
    )
}

export default LiveChat;