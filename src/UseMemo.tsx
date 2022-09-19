import React, {useMemo, useState} from 'react';

export const DifficalCountingExemple1 = () => {
    const [a, setA] = useState<number>(4)
    const [b, setB] = useState<number>(4)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResulteA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeVaue = Math.random()
            }
            tempResulteA = tempResulteA * i
        }
        return tempResulteA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                result for a : {resultA}
            </div>
            <div>
                result for b : {resultB}
            </div>
        </div>
    );
};


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {

    console.log('exaemple')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])



    const newArray=useMemo(()=>{
      const newArray = users.filter(u=> u.toLowerCase().indexOf('a')> -1)
    return newArray
        }
    , [users])

    return(
        <div>
            <button onClick={()=> setCounter(counter+1)}>+</button>
            {counter}
            <Users users={newArray}/>
        </div>
    )
}