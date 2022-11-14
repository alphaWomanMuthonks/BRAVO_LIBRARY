import React, {useState, useEffect} from 'react';

const EditAuthor = (props) => {

    // setting initial states
    const [author, setAuthor] = useState(props.currentAuthor);

    // effect hook to set setAuthor state to current selected author for editing
    useEffect(() => {
        setAuthor(props.currentAuthor)
    }, [props])

    // getting edit form inputs and setting them as states for setAuthor
    const handleInput = (e) => {
        const {name, value} = e.target;
        setAuthor({ ...author, [name]:value })
    }

    // handle edit form submission, update values in form
    const submitEditForm = (e) => {
        e.preventDefault();
        props.updateAuthor(author.id, author)
        
        fetch(`https://bravo-library01.herokuapp.com/authors/${author.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(author),
        }).then(res => res.json()).then(console.log)
    }


    return(
        <form onSubmit={submitEditForm} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" className="form-control" name="first_name" placeholder="First name" value={author.first_name} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" className="form-control" name="last_name" placeholder="Last name" value={author.last_name} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Image_url</label>
            <input type="text" className="form-control" name="image_url" placeholder="Image_url" value={author.image_url} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Genre</label>
            <input type="text" className="form-control" name="genre" placeholder="genre" value={author.genre} onChange={handleInput} />
            </div><br></br>
            <button className="btn btn-primary mr-4">Submit</button>
            <button 
                type="submit" 
                className="btn btn-warning"
                onClick={() => props.setEdit(false)}
            >
                   Cancel
            </button>
        </form>
    )
}

export default EditAuthor;