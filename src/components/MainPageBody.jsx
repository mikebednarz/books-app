import { addBook } from "../features/Books";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updateRenderOrderByAdded, updateRenderOrderByTitleA, updateRenderOrderByTitleD } from "../features/Books";
import React from "react";

/*
example OL keys:
OL45804W
OL17860744W
OL20090688W
*/

const MainPageBody = () => {
  const [OLID, setOLID] = useState('');
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id: OLID,
      title: null,
      author: null,
      description: null,
      orderID: bookList.length > 0 ? bookList[bookList.length - 1].orderID + 1 : 0
    };

    fetch(`https://openlibrary.org/works/${OLID}.json`)
      .then(response => response.json())
      .then(json => 
        {
          data.title = json.title;
          data.author = json.authors[0].author.key;
          data.description = json.description.slice(0, 400) + `...`;
        })
      .then(() => {
        dispatch(addBook(data));
        setNotFound(false);
        console.log(bookList);
      })
      .catch(() => {
        setNotFound(true);
      });
  };

  const handleInputChange = (event) => {
    setOLID(event.target.value);
  };

  const handleOptionChange = () => {
    const dropdownBox = document.getElementById('dropdown');
    const selectedOption = dropdownBox?.value;

    if (selectedOption === 'order-added') {
      dispatch(updateRenderOrderByAdded())
    } else if (selectedOption === 'titleA') {
      dispatch(updateRenderOrderByTitleA())
    } else {
      dispatch(updateRenderOrderByTitleD())
    }
  }

  return (
    <div className="main-page-body">
      <p className="add-book-text">Add a book by Open Library ID Number</p>
      
      <form>
        <input className="input" placeholder="OLID" onChange={handleInputChange}></input>
        <button type="submit" className="add-button" onClick={handleSubmit}>Add Book</button>
      </form>
      {notFound === true && <p className="not-found">OLID not found</p>}
      <p className="sort-by">Sort by:</p>
      <select id='dropdown' onChange={handleOptionChange} className="dropdown">
        <option value='order-added'>Order Added</option>
        <option value='titleA'>Title - Ascending</option>
        <option value='titleD'>Title - Descending</option>
      </select>
    </div>
  )
};

export default MainPageBody