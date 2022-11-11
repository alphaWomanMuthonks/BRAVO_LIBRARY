import React from 'react';

const BookView = (props) => {
    return(
        <div className="table-responsive-sm">
        <table className="table">
            <thead>
                <tr>
                <th className="text-primary"> </th>
                {/* <th className="text-primary">Title</th> */}
                <th className="text-primary">Author Id</th>
                <th className="text-primary">Year</th>
                <th className="text-primary">ISBN</th>
                <th className="text-primary">Price $</th>
                <th className="text-primary">Stock</th>
                <th className="text-primary">Edit</th>
                <th className="text-primary">Delete</th>
                </tr>
            </thead>
            <tbody className="text-light">
                {props.books.length > 0 ? (
                    props.books.map(book => (
                        <tr key={book.id}>
                            <td><img src={book.image_url} alt={book.title} height="50" /></td>
                            {/* <td>{book.title}</td> */}
                            <td>{book.author_id}</td>
                            <td>{book.year}</td>
                            <td>{book.isbn}</td>
                            <td>{book.price}</td>
                            <td>{book.stock}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={() => {
                                        props.editBook(book)
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.deleteBook(book.id)
                                    }}
                                    className="btn btn-sm btn-danger"
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Books Available</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default BookView;