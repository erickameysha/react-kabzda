import React, {useEffect, useState} from 'react';

const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('simple exemple')
    useEffect(() => {
        console.log('useEffect')
        debugger
        document.title = counter.toString()
    }, [counter])
    return (
        <>
            hello, {counter} fake{fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    );
};

export default SimpleExample;