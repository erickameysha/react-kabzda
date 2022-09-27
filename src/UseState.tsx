import React, {useMemo, useState} from 'react';





function genereteData() {
    console.log('generet')
    return 324582734
}
const ExempleState1 = () => {
    // let initValue = useMemo(genereteData, [])


    const [counter, setCounter]= useState(genereteData)
     const changer =(state: number)=>{
        debugger
        return state+1}
    console.log('exemle1')

    return (
        <div>
            {counter}
          <button onClick={()=> setCounter(counter+ 1)}> +</button>
        </div>
    );
};

export default ExempleState1;