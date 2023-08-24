import './App.css';
import Header from './components/Header';
import MainPageBody from './components/MainPageBody';
import { useSelector } from 'react-redux';
import BookCard from './components/BookCard';
import { useEffect } from 'react';

function App() {
  const bookList = useSelector((state) => state.books.value);

  useEffect(() => {
    window.localStorage.setItem('STATE', JSON.stringify(bookList));
  }, [bookList])

  return (
    <div className='App'> 
      <Header />
      <MainPageBody />
      <div>
        {bookList.map((book) => {
          return <BookCard title={book.title} author={book.author} description={book.description} key={book.id} id={book.id}/>
        })}
      </div>
    </div>
  );
}

export default App;