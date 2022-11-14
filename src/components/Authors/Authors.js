import React, { useState, useEffect } from "react";
import '../../index.css';
import AuthorView from "./AuthorView";
import AddAuthor from "./AddAuthor";
import EditAuthor from "./EditAuthor";

function Authors() {

    const formState = {id:null, first_name:'', last_name:'', image_url:'',genre:''}
    const [authors, setAuthors] = useState([])
    const [edit, setEdit] = useState(false);
    const [currentAuthor, setCurrentAuthor] = useState(formState);

    useEffect(() => {
        fetch("https://bravo-library01.herokuapp.com/authors")
        .then(res => res.json())
        .then(setAuthors)
    },[])

    // CRUD OPERATIONS
    // CREATE An Author
    const addAuthor = author => {
        author.id = authors.length + 1;
        setAuthors([...authors, author]);
    }

    // EDIT An Author
    const editAuthor = author => {
        setEdit(true)
        setCurrentAuthor({ id:author.id, first_name:author.first_name, last_name:author.last_name, image_url:author.image_url, genre:author.genre})
    }
    // UPDATE An Author
    const updateAuthor = (id, updatedAuthor) => {
        setEdit(false)
        setAuthors(authors.map(author => (author.id === id ? updatedAuthor : author )))
    }
    // REMOVE An Author
    const deleteAuthor = id => {
        setEdit(false);
        setAuthors(authors.filter(author => author.id !== id))

        fetch(`http://localhost:9292/authors/${id}`, {
          method: "DELETE"
        })
    }

    return (
        <div className="container">
          <div className="header">
            <h1>BRAVO AUTHORS</h1>
            <br/>
            <br/>
          </div>
          <div className="row library">
          <div className="col-sm-6 add-Author">
            {edit ? (
              <div>
                  <h2>Edit Author</h2>
                  <EditAuthor 
                    edit={edit}
                    setEdit={setEdit}
                    currentAuthor={currentAuthor}
                    updateAuthor={updateAuthor}
                  />
              </div>
            ) : (
              <div>
                <h1>Add Author</h1>
                  <AddAuthor
                    addAuthor={addAuthor}
                />
              </div>
            )}
          </div>
          <div className="col-md-6">
            <h1>Available Authors</h1>
              <AuthorView
                authors={authors}
                editAuthor={editAuthor}
                deleteAuthor={deleteAuthor}
              />
          </div>
          </div>
        </div>
      );
}

export default Authors;
