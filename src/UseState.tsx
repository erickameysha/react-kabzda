import React, {useMemo, useState} from 'react';


function generateData() {
    console.log('generation data')
    return 3234
}

const Example1 = () => {
    console.log('exemple1')
    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)// [0, function(newValue){}]
 const changer = ( state:number)=>{
        return state + 1
 }

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    );
};

export default Example1;