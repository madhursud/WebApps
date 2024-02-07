import {useState} from 'react';
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit}) {
    
    const [editMode, setEditMode] = useState(false);
    
    const handleDeleteClick = () => {
        onDelete(book.id);
    };
    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    
    const onClose = () => {
        setEditMode(false);
    }

    const onSubmit = (id, newTitle) => {
        onEdit(id, newTitle);

        onClose();
    };

    let content = <h3> {book.title} </h3>;

    if (editMode)
        content = <BookEdit book={book} onSubmit={onSubmit} />;

 
    return <div className="book-show">
        <img
            alt='books'
            src={`https://picsum.photos/seed/${book.id}/300/200`}
        />    
            {content}
        <div className="actions">
            <button className='edit' onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick} />
        </div> 
    </div>;

}

export default BookShow;