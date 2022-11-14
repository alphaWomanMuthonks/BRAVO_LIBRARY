import React, { useState } from "react";

const AddAuthor = (props) => {

    // setting inital states for Component
    const formState = {
         id:null, 
         first_name:'', 
         last_name:'', 
         image_url:'',
         genre:''
        }
    const [author, setAuthor] = useState(formState);

    // getting form inputs and setting them as states
    const handleInput = (e) => {
        const {name, value} = e.target;
        setAuthor({ ...author, [name]:value })
    }

    // handle author form on submission
    const submitAuthor = (e) => {
        e.preventDefault();
        if(!author.first_name || !author.last_name || !author.image_url || !author.genre) return
        props.addAuthor(author)
        setAuthor(formState)
        
        fetch("https://bravo-library01.herokuapp.com/authors", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(author),
        }).then(res => res.json()).then(console.log)
    }

    return(
        <form onSubmit={submitAuthor} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" className="form-control" name="first_name" placeholder="Author first name" value={author.first_name} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" className="form-control" name="last_name" placeholder="Author last name" value={author.last_name} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Image_url</label>
            <input type="text" className="form-control" name="image_url" placeholder="Image_url" value={author.image_url} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Genre</label>
            <input type="text" className="form-control" name="genre" placeholder="genre" value={author.genre} onChange={handleInput} />
            </div><br></br>
            
            <button type="submit" className="btn btn-primary">Add Author</button>
        </form>
    )
}

export default AddAuthor;
