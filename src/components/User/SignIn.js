import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, users, setUser, setLoggedIn, setMember }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(user)

    const handleInput = (e) => {
        const {name, value} = e.target;
        setCurrentUser({ ...currentUser, [name]:value })
    }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(users);
    console.log(currentUser);

    if (users.find((user) => {
            return user.username === currentUser.username && user.password === currentUser.password
        })) {
        setUser(user)
        setLoggedIn(true)
        navigate('/')
    } else {
        console.error("Invalid username or password!")
    }

  }

  function signUp(e) {
    e.preventDefault();
    setMember(false);
  }

  return (
    <div>
      <div>
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" value={currentUser.username} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="text" className="form-control" name="password" placeholder="Password" value={currentUser.password} onChange={handleInput} />
            </div><br></br>
            <button className="btn btn-primary mr-4">Sign In</button>
        </form>
            <button type="click" className="btn btn-secondary" onClick={signUp}>
                Not a Bravo Reader? Sign Up
            </button>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label>
              {"Username: "}
              <input placeholder="Enter username" value={user.username} onChange={(e) => setUsername(e.target.value)} />
              <br />
            </label>
          </div>
          <div>
            <label>
              {"Password: "}
              <input placeholder="Enter password" type="password" value={user.password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <br />
          <button type="submit">
            Login
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default Login;