import "./BookListing.css"

function BookListing({id, title, author, image, genre, setClickedBook}) {
    
    function bookClick() {
        setClickedBook(id)
    }

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