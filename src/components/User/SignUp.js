import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ user, users, setUser, setLoggedIn, setMember }) {
  const navigate = useNavigate()
  const [newUser, setNewUser] = useState(user)

    const handleInput = (e) => {
        const {name, value} = e.target;
        setNewUser({ ...user, [name]:value })
    }

  function handleSubmit(e) {
    e.preventDefault();

    if (users.find((user) => {
        return user.username === newUser.username && user.password === newUser.password
        })) {
        console.log("User exists, Log in?");
        navigate('/login')
        setMember(true)
    } else {
        setUser(newUser);
        setLoggedIn(true);
        setMember(true);
        fetch("http://localhost:9292/readers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }).then((r) => r.json()).then(console.log).catch(console.error)
        navigate('/')
    }

  }

  function signIn(e) {
    e.preventDefault();
    setMember(true);
  }

  return (
    <div>
      <div>
        <h2>Sign Up Here</h2>

        <form onSubmit={handleSubmit} className="text-light font-weight-bold">
            <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" className="form-control" name="first_name" placeholder="First name" value={user.first_name} onChange={handleInput}/>
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" className="form-control" name="last_name" placeholder="Last name" value={user.last_name} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Image_url</label>
            <input type="text" className="form-control" name="image_url" placeholder="Image_url" value={user.image_url} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Username</label>
            <input type="text" className="form-control" name="username" placeholder="username" value={user.username} onChange={handleInput} />
            </div><br></br>
            <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" name="password" placeholder="password" value={user.password} onChange={handleInput} />
            </div><br></br>
            <button className="btn btn-primary mr-4">Bravo Up</button>
        </form>
            <button type="click" className="btn btn-secondary" onClick={signIn}>
                Member?
            </button>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label>
              {"First Name: "}
              <input placeholder="Enter first_name" name="first_name" value={user.first_name} onChange={handleInput} />
              <br />
            </label>
          </div>
          <div>
            <label>
              {"Last Name: "}
              <input placeholder="Enter last_name" name="last_name" value={user.last_name} onChange={handleInput} />
              <br />
            </label>
          </div>
          <div>
            <label>
              {"Username: "}
              <input placeholder="Enter username" name="username" value={user.username} onChange={handleInput} />
              <br />
            </label>
          </div>
          <div>
            <label>
              {"Password: "}
              <input placeholder="Enter password" name="password" type="password" value={user.password} onChange={handleInput} />
            </label>
          </div>
          <br />
          <button type="submit">
            Bravo up
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default SignUp;