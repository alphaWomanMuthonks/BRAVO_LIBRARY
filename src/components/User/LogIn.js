import React, { useState, useEffect } from "react";
import SignIn from './SignIn'
import SignUp from "./SignUp";

function Login({ setLoggedIn }) {

    const currentUser = {id:null, first_name:'', last_name:'', image_url:'',username:'', password:''}
    const [user, setUser] = useState(currentUser);
    const [member, setMember] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/readers")
        .then(res => res.json())
        .then(setUsers)
    },[])

    return (
        <div className="container">
            <div className="header">
                <h1>LOG IN</h1>
                <br/>
                <br/>
            </div>
            <div className="row library">
                <div className="col-sm-6 add-book">
                    {member ? (
                    <div>
                        <h2>Sign In</h2>
                        <SignIn
                            user={user}
                            users={users}
                            setUser={setUser}
                            setLoggedIn={setLoggedIn}
                            setMember={setMember}
                        />
                    </div>
                    ) : (
                    <div>
                        <h1>Sign Up</h1>
                        <SignUp
                            user={user}
                            users={users}
                            setUser={setUser}
                            setLoggedIn={setLoggedIn}
                            setMember={setMember}
                        />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;
