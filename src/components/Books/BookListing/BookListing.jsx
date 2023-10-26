import "./BookListing.css"

function BookListing({id, title, author, image, genre, setClickedBookId}) {
    
    function bookClick() {
        // Take the id of this specific book, and set it into the 
        // clickedBookId state of the Book component 
        setClickedBookId(id)
    }

    // We run the bookClick function when a book is clicked
    return (
        <div className="bookListing" onClick={bookClick}>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <img src={image} alt={title} />
            <p>{genre}</p>
        </div>
    )
}

export default BookListing