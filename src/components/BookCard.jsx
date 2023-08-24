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
    dispatch(updateTitle({id: id, title: document.getElementById(`editTitle${id}`).innerHTML}));
  }

  const handleAuthorUpdate = (id) => {
    dispatch(updateAuthor({id: id, author: document.getElementById(`editAuthor${id}`).innerHTML}));
  }

  const handleDescriptionUpdate = (id) => {
    dispatch(updateDescription({id: id, description: document.getElementById(`editDescription${id}`).innerHTML}));
  }

  return (
    <div className="book-card">
      <p id={`${id}`} className="id-inline">{id}</p>

      <button className="delete-card-button" onClick={() => handleDelete(id)}>X</button>

      <p><strong>Title:</strong> <span id={`editTitle${id}`} contentEditable='true'>{title}</span> <button style={buttonStyle} onClick={() => handleTitleUpdate(document.getElementById(`${id}`).innerHTML)}><BiSave /></button></p>

      <p><strong>Author:</strong> <span id={`editAuthor${id}`} contentEditable='true'>{author}</span> <button style={buttonStyle} onClick={() => handleAuthorUpdate(document.getElementById(`${id}`).innerHTML)}><BiSave /></button></p>

      <p><strong>Description:</strong> <span id={`editDescription${id}`} contentEditable='true'>{description}</span> <button style={buttonStyle} onClick={() => handleDescriptionUpdate(document.getElementById(`${id}`).innerHTML)}><BiSave /></button></p>
    </div>
  )
};


export default BookCard;