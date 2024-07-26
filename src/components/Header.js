import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
 
const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setshowSuggestions] = useState(false);
    const dispatch = useDispatch();
    
    const serachCache = useSelector((store) => store.search);
    
    useEffect(() => {
      
        // console.log(searchQuery);
        const timer = setTimeout(() => {
            if(serachCache[searchQuery]){
                setSuggestions(serachCache[searchQuery])
            } 
            else {
                getSearchSuggestions() 
            }
        }, 200)         

        return () => {
            clearTimeout(timer);
        }
 

    }, [searchQuery])


    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery] : json[1],
          })
        )
    }


    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img 
                    onClick={toggleMenuHandler}
                    className="h-8 cursor-pointer"
                    alt="menu" 
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"/>

                <a href="/">
                <img 
                    className="h-8 mx-2"
                    alt="youtube-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
                </a>
            </div> 
            <div className="col-span-10 px-10">
                <div>
                    
                
                <input className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setshowSuggestions(true)}
                onBlur={() => setshowSuggestions(false)}
                />
                <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
                </div>
                {showSuggestions && (
                    <div className="fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestions.map((s) => (<li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>))}
                    </ul>
                </div>)}
            </div> 
            <div className="col-span-1">
                <img 
                    className="h-8"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>  
        
        </div>
    )
}

export default Header;