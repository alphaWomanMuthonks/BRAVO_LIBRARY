import React, {useEffect, useState} from 'react';
import '../../index.css';
import BookView from './BookView';
import Addbook from './AddBook';
import EditBook from './EditBook';

function Books() {

  const formState = {id:null, title:'', author_id:'', year:'',isbn:'', price:'', image_url:'', stock:''}
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentBook, setCurrentBook] = useState(formState);

  useEffect(() => {
    fetch("https://bravo-library01.herokuapp.com/books")
    .then(res => res.json())
    .then(setBooks)
  },[])

  // CRUD OPERATIONS
  // CREATE A BOOK
  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  }

  // EDIT A BOOK
  const editBook = book => {
    setEdit(true)
    setCurrentBook({ id:book.id, title:book.title, author_id:book.author_id, year:book.year, isbn:book.isbn, price:book.price, image_url:book.image_url, stock:book.stock})
  }
  // UPDATE A BOOK
  const updateBook = (id, updatedBook) => {
    setEdit(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book )))
  }
  // REMOVE A BOOK
  const deleteBook = id => {
    setEdit(false);
    setBooks(books.filter(book => book.id !== id))

    fetch(`https://bravo-library01.herokuapp.com/books/${id}`, {
      method: "DELETE"
    })
  }



  return (
    <div className="container">
      <div className="header">
        <h1>BRAVO BOOKS</h1>
        <br/>
        <br/>
      </div>
      <div className="row library">
      <div className="col-sm-6 add-book">
        {edit ? (
          <div>
              <h2>Edit Book</h2>
              <EditBook 
                edit={edit}
                setEdit={setEdit}
                currentBook={currentBook}
                updateBook={updateBook}
              />
          </div>
        ) : (
          <div>
            <h1>Add Book</h1>
              <Addbook
                addBook={addBook}
            />
          </div>
        )}
      </div>
      <div className="col-md-6">
        <h1>Available Books</h1>
          <BookView
            books={books}
            editBook={editBook}
            deleteBook={deleteBook}
          />
      </div>
      </div>
    </div>
  );
}

export default Books;