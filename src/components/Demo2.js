import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
    let x = 0;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    // const i = useRef(null);
    let i = {
        current : null
    }
    /*
        ref is not ref = 0 
        it is ref = {current : 0} 
        it is an object with current property
    */
    useEffect(() => {
        i.current = setInterval(() => {
            // console.log("I'm very fast & focused", Math.random())
        },1000);

        return () => clearInterval(i.current);
    },[]);

    return (
        <div className="m-4 p-2 border border-black bg-slate-50 w-96 h-96">
            <div>
                <button className="bg-green-100 p-2 m-4" onClick={() => {
                    x = x + 1;
                    console.log(x)
                }}>Increase x</button>
                <span className="font-bold text-xl">Let = {x}</span>
            </div>
            <div>
                <button className="bg-green-100 p-2 m-4" onClick={() => {
                    setY(y + 1);
                }}>Increase y</button>
                <span className="font-bold text-xl">state = {y}</span>
            </div>
            <div>
                <button className="bg-green-100 p-2 m-4" onClick={() => {
                    ref.current = ref.current + 1;
                }}>Increase z</button>
                <span className="font-bold text-xl">ref = {ref.current}</span>
            </div>
            <button className="m-2 p-2 bg-red-500 text-white rounded-lg" onClick={() => { clearInterval(i.current)}}>Stop Interval</button>
        </div>)
}

export default Demo2;

// NOTES: whenever component re-renders it refreshses let and on state change component does re-render