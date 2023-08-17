import { deleteBook, updateTitle, updateAuthor, updateDescription } from "../features/Books";
import { useDispatch } from "react-redux";
import { BiSave } from 'react-icons/bi';
import React from "react";

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
};

const BookCard = ({title, author, description, id}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook({id: id}));
  }

  const handleTitleUpdate = (id) => {
    console.log(document.getElementById('editTitle')?.innerHTML)
    dispatch(updateTitle({id: id, title: document.getElementById('editTitle')?.innerHTML}));
  }

  const handleAuthorUpdate = (id) => {
    console.log(document.getElementById('editAuthor')?.innerHTML)
    dispatch(updateAuthor({id: id, author: document.getElementById('editAuthor')?.innerHTML}));
  }

  const handleDescriptionUpdate = (id) => {
    console.log(document.getElementById('editDescription')?.innerHTML)
    dispatch(updateDescription({id: id, description: document.getElementById('editDescription')?.innerHTML}));
  }

  return (
    <div className="book-card">
      <button className="delete-card-button" onClick={() => handleDelete(id)}>X</button>

      <p><strong>Title:</strong> <span id='editTitle' contentEditable='true'>{title}</span> <button style={buttonStyle} onClick={() => handleTitleUpdate(id)}><BiSave /></button></p>

      <p><strong>Author:</strong> <span id='editAuthor' contentEditable='true'>{author}</span> <button style={buttonStyle} onClick={() => handleAuthorUpdate(id)}><BiSave /></button></p>

      <p><strong>Description:</strong> <span id='editDescription' contentEditable='true'>{description}</span> <button style={buttonStyle} onClick={() => handleDescriptionUpdate(id)}><BiSave /></button></p>
    </div>
  )
};


export default BookCard;