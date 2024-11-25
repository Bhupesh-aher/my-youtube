import React, { useRef, useState } from 'react'

const Demo2 = () => {
    const [y, setY] = useState(0);
    let x = 0;

    const ref = useRef(0);


    console.log("rendering...");
    
  return (
    <div className='m-4 p-2 w-96 h-96 bg-slate-50 border border-black'>
        <div>
            <button
            onClick={() => {
                x = x + 1;
                console.log("x=", x);
                
            }} 
             className=' bg-black text-white p-2 m-4 '>Increase X</button>
            <span className='font-bold text-xl'>let x = {x}</span>
        </div>
        <div>
            <button 
            onClick={() => {
                setY(y+1)
            }}
             className=' bg-black text-white p-2 m-4 '>Increase Y</button>
            <span className='font-bold text-xl'>state = {y}</span>
        </div>
        <div>
            <button 
            onClick={() => {
                ref.current += 1;
                console.log("ref = ", ref.current);
                
            }}
             className=' bg-black text-white p-2 m-4 '>Increase Ref</button>
            <span className='font-bold text-xl'>Ref = {ref.current}</span>
        </div>
    </div>
  )
}

export default Demo2 