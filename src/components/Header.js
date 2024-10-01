import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search);

    const dispatch = useDispatch();
    //every time search query changes make an API call but I want to call API if and only if diff b/w  key stroke is greater than 200ms
    useEffect(() => {
        // make an API call after every key press
        // but if the difference between 2 key strokes is < 200ms
        // decline the API call 


        // suppose my  searchCache =  {"ip" : ["iphone", "iphone11"]}
        //  searchQuery = iphone
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
               setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    // key - i
    // render the component
    // call useEffect()
    // start times make api call after 200ms

    // key - ip (p is pressed now)
    // destroy the component ( useEffect return method will  be called)
    // re-render the component
    // it will call useEffect()
    // new times 
    // it's a new everything everytime it is re-rendering
    // if no key is pressed in 200ms then it will make another api call because of setTimeout


    const getSearchSuggestions = async () => {
        // const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
        const data = await fetch("");
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }));
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} className="h-6 cursor-pointer" alt="Menu" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png" />
                <a><img className="h-20" alt="youtube-logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" /></a>
            </div>
            <div className="col-span-10 center">
                <div>
                    <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search" value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)} />
                    {/* blur means on focus out */}
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
                </div>
                {showSuggestions && (<div className="fixed bg-white w-[42rem] py-2 px-5 rounded-b-lg shadow-lg border border-gray-100">
                    <ul>
                        {suggestions.map(s => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}
                    </ul>
                </div>)}
            </div>

            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
            </div>

        </div>
    )
}

export default Header;