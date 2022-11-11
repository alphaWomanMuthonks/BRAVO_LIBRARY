import React from "react";

function AuthorView(props) {
    return (
        <div className="table-responsive-sm">
        <table className="table">
            <thead>
                <tr>
                <th className="text-primary"> </th>
                <th className="text-primary">First Name</th>
                <th className="text-primary">Last Name</th>
                <th className="text-primary">Author Id</th>
                <th className="text-primary">Genre</th>
                <th className="text-primary">Edit</th>
                <th className="text-primary">Delete</th>
                </tr>
            </thead>
            <tbody className="text-light">
                {props.authors.length > 0 ? (
                    props.authors.map(author => (
                        <tr key={author.id}>
                            <td><img src={author.image_url} alt={author.first_name} height="50" /></td>
                            <td>{author.first_name}</td>
                            <td>{author.last_name}</td>
                            <td>{author.id}</td>
                            <td>{author.genre}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={() => {
                                        props.editAuthor(author)
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.deleteAuthor(author.id)
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
                        <td>No authors Available</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default AuthorView;
