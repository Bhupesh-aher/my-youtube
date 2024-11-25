import { useEffect, useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {

    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // const [prime, setPrime] = useState();


    // console.log("rendering....") 

    // const prime = findPrime(text)
    const prime = useMemo(() => findPrime(text), [text]);


    // const prime = () => {
    //     console.log("calucate number...", text);
    //     return findPrime(text);
        
    // }


    // it is hackiy way of doing without using useMemo() hook
    // useEffect(() => {
    //   const value = findPrime(text)
    //   setPrime(value)
       
    // }, [text])
    
    

    

 
    return (
        <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-600 text-white") }>
            <div>
                <button className="m-10 p-2 bg-green-200 " onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
            </div>
            <div>
                <input 
                className="border border-black w-72 px-2"
                type="number" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
            </div>
        </div>
    )
}

export default Demo; 