import React, {useEffect, useState} from 'react';

const UseEffectExemple = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)


    console.log('exemp1')

    useEffect(() => {

        document.title = counter.toString()
        console.log('useEffect render every')
    },)
    useEffect(() => {

        document.title = counter.toString()
        console.log('UseEffect only first render (ComponentDidMount)')
    },[])
    useEffect(() => {

        document.title = counter.toString()
        console.log('UseEffect first render and every counter change')
    },[counter])

    return (
        <div>
            hello: {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </div>
    );
};
export const SetTimeOutExemple = () => {
    const [counter, setCounter] = useState( 0)
    const [fake, setFake] = useState(0)


    console.log('exemp1')

    useEffect(() => {
        setInterval(()=> {
            console.log('tik'+counter)
setCounter((state)=>state+1)
        }, 1000)
    },[])

    return (
        <div>
            counter: {counter}  fake:{fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </div>
    );
};

export default UseEffectExemple;