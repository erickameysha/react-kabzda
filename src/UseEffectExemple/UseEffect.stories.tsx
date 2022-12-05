import React, {useEffect, useState} from 'react'


export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    },[])
    useEffect(() => {
        console.log('useEffect  first render and every count change')
        document.title = counter.toString()
    },[counter])


    return <>
        hello {counter},{fake}
        <button onClick={()=> setFake(fake +1)}>fake+</button>
        <button onClick={()=> setCounter(counter +1)}>counter+</button>
    </>
}
