import { useEffect, useState } from "react"

function BookDetail({clickedBookId}) {
    // The usual state to hold data from a fetch request
    const [title, setTitle] = useState('')
    const [blurb, setBlurb] = useState('')
    const [pageCount, setPageCount] = useState('')
    const [year, setYear] = useState('')

    // This effect has [clickedBookId] as it's second param
    // That means our fetch request will run every time clickedBookId changes
    // In other words, this useEffect re-fetches the correct book everytime you 
    // click on a new book
    useEffect(function () {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books/' + clickedBookId)
            .then(function (res) {
                return res.json()
            })
            .then(function (bookData) {
                // usual fetch setting state stuff
                setTitle(bookData.data.title)
                setBlurb(bookData.data.blurb)
                setPageCount(bookData.data.page_count)
                setYear(bookData.data.year)
            })
    }, [clickedBookId])

    return (
        <div>
            <h1>{title}</h1>
            <p>{blurb}</p>
            <p>{pageCount}</p>
            <p>{year}</p>
        </div>
    )
}

export default BookDetail