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
    }, [])
    useEffect(() => {
        console.log('useEffect  first render and every count change')
        document.title = counter.toString()
    }, [counter])


    return <>
        hello {counter},{fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            console.log('tick'+ counter )
            setCounter((state)=> state+1)

        }, 1000)

    }, [])


    return <>
        counter- {counter}, fake-{fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}



export const Clock = () => {

    let a= new Date()

    let initSeconds = a.getSeconds()
    const [hours, setHours]=useState(a.getHours())
    const [minutes, setMinutes]=useState(a.getMinutes())
    const [seconds, setSeconds]=useState(a.getSeconds())
    // useEffect(()=>{
    //     setInterval(()=>{
    //         // console.log('second Tik'+ seconds)
    //      setSeconds((state)=> state + 1)
    //
    //     }, 1000)
    // },[])


    return <>
        {hours}:{minutes}: {seconds}
    </>






}