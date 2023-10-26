import { useState } from "react"
import { useEffect } from "react"
import BookListing from "./BookListing/BookListing"
import "./Books.css"
import BookDetail from "../BookDetail/BookDetail"

function Books() {
    // Contains the list of books we got from the fetch request
    const [books, setBooks] = useState([])
    // Going to contain the ID of the book that the user has clicked on
    const [clickedBookId, setClickedBookId] = useState(null)

    // useEffect that runs only on mount ([]) to fetch the list of ALL books
    useEffect(function () {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(function (res) {
                return res.json()
            })
            .then(function (bookData) {
                // We take the array of books and save them in the books state
                setBooks(bookData.data)
            })
    }, [])

    return (
        <>
        {clickedBookId && <BookDetail clickedBookId={clickedBookId} />}

        <div className='books'>
            {/* Taking the books state (contains the books from the fetch)
            and using map to loop through them
            for each book, display a BookListing component */}
            {books.map(book => <BookListing 
                key={book.id}
                id={book.id} 
                title={book.title}
                author={book.author}
                image={book.image}
                genre={book.genre.name}
                // Here we are giving each BookListing the abiltiy to 
                // change which book was clicked on
                setClickedBookId={setClickedBookId} 
            />)}

        </div>
        </>
    )
}

export default Books