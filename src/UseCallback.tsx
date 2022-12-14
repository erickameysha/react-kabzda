import React, {useCallback, useMemo, useState} from "react";


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const LikeUseCallback = () => {

    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])
    const hoopCount  =(n: any)=> {
        return n >= 10 ? "Great, now move on to tricks" : 'Keep at it until you get it'
    }
    console.log(hoopCount(12))
    const addBook = () => {
        console.log(books)
        const newUser = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUser)

    }
    const memoizedAddBook = useMemo(()=> {
        return () => {
            console.log(books)
            const newUser = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUser)
        }
    }, [books])
    const memoizedAddBookCallback = useCallback(()=> {
            console.log(books)
            const newUser = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUser)

    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {/*<button onClick={() => addBook()}>Add book</button>*/}
            {counter}
            <Book addBook={memoizedAddBookCallback}/>
        </div>
    )
}
type BookSecretPropsType = { addBook: () => void }
const BooksSecret = (props: BookSecretPropsType) => {
    console.log('users secret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            // props.Book.map((book, i) => <div key={i}>{book}</div>)
        }</div>
}


const Book = React.memo(BooksSecret)