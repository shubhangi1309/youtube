import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
    const [number, setNumber] = useState("Shubhangi Modi is an excellent React Developer");
    const [theme, setTheme] = useState(false);
    // console.log("Rendering..."); // it was coming twice because of React.StrictMode 
    //heavy operation
    const prime = useMemo(() => (findPrime(1)),[number]); // prime will hold memoised value, momise it and only change when my text changes
    return (
    <div className={
        "m-4 p-2 w-96 h-96 border border-black " + 
        (theme && "bg-gray-900 text-white")}
        >
        <div>
            <button className="m-10 p-2 bg-green-200" onClick={() => {
                setTheme(!theme);
            }}>Theme Change</button>
            <input className="w-72 border border-black px-2" type="number" value={number} onChange={(e) => {
                setNumber(e.target.value)
            }}/>
            Prime
        </div>
    </div>
    )
}

export default Demo;
