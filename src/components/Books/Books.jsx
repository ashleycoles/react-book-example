import { useState } from "react"
import { useEffect } from "react"
import BookListing from "./BookListing/BookListing"
import "./Books.css"
import BookDetail from "../BookDetail/BookDetail"

function Books() {
    const [books, setBooks] = useState([])
    const [clickedBook, setClickedBook] = useState(null)

    useEffect(function () {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(function (res) {
                return res.json()
            })
            .then(function (bookData) {
                setBooks(bookData.data)
            })
    }, [])

    return (
        <>
        {clickedBook && <BookDetail clickedBook={clickedBook} />}

        <div className='books'>
            {books.map(book => <BookListing 
                key={book.id}
                id={book.id} 
                title={book.title}
                author={book.author}
                image={book.image}
                genre={book.genre.name}
                setClickedBook={setClickedBook}
            />)}

        </div>
        </>
    )
}

export default Books