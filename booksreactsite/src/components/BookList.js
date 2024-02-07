import BookShow from "./BookShow"
function BookList({books, onDelete, onEdit}) {
    console.log(books);
    const renderedBooks = () => {
        return books.map((book) => {
            console.log('Inside render', books);
            return <BookShow  key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
        }  );
    }
    return <div className="book-list" > {renderedBooks()} </div>; 
}

export default BookList;