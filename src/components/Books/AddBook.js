import React, {useState} from 'react';

const Addbook = (props) => {

    // setting inital states for Component
    const formState = {
         id:null, 
         title:'', 
         author_id:'', 
         year:'',
         isbn:'',
         price:'',
         image_url:'',
         stock:''
        }
    const [book, setBook] = useState(formState);

    // getting form inputs and setting them as states
    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    // handle book form on submission
    const submitBook = (e) => {
        e.preventDefault();
        if(!book.title || !book.author_id || !book.year || !book.isbn || !book.price || !book.image_url || !book.stock) return
        props.addBook(book)
        setBook(formState)
        
        fetch("https://bravo-library01.herokuapp.com/books", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        }).then(res => res.json()).then(console.log)
    }

    return(
        <form onSubmit={submitBook} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">Title</label>
            <input type="text" className="form-control" name="title" placeholder="Book title" value={book.title} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Author ID</label>
            <input type="number" className="form-control" name="author_id" placeholder="Author ID" value={book.author_id} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Year Of Publication</label>
            <input type="text" className="form-control" name="year" placeholder="Year" value={book.year} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">ISBN</label>
            <input type="number" className="form-control" name="isbn" placeholder="isbn" value={book.isbn} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Price</label>
            <input type="number" className="form-control" name="price" placeholder="price" value={book.price} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Image_url</label>
            <input type="text" className="form-control" name="image_url" placeholder="Image_url" value={book.image_url} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Stock</label>
            <input type="number" className="form-control" name="stock" placeholder="stock" value={book.stock} onChange={handleInput} />
            </div><br></br>
            
            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    )
}

export default Addbook;