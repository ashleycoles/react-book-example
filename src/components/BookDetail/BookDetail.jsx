import { useEffect, useState } from "react"

function BookDetail({clickedBook}) {
    const [title, setTitle] = useState('')
    const [blurb, setBlurb] = useState('')
    const [pageCount, setPageCount] = useState('')
    const [year, setYear] = useState('')

    useEffect(function () {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books/' + clickedBook)
            .then(function (res) {
                return res.json()
            })
            .then(function (bookData) {
                setTitle(bookData.data.title)
                setBlurb(bookData.data.blurb)
                setPageCount(bookData.data.page_count)
                setYear(bookData.data.year)
            })
    }, [clickedBook])

    return (
        <div>
            {clickedBook}
            <h1>{title}</h1>
            <p>{blurb}</p>
            <p>{pageCount}</p>
            <p>{year}</p>
        </div>
    )
}

export default BookDetail