import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { readLocalStorage } from '../helpers/helpers'
// const user = {
//     id: "123",
//     name: "georg",
//     surname: "bat",
//     email:"george@gmail.com",
//     password:"gere"
//   }

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const onRegister = (e) => {
    e.preventDefault();
    const users = readLocalStorage('users')

    const newUser = {
        id: new Date().getTime(),
        name: name,
        surname: surname,
        email: email,
        password: password
    }

    const emailExists = users.find(user => user.email === newUser.email);
    if (emailExists) {
        setError("იმეილი დაკავებულია!")
        return;
    }

    const updated = users.concat([newUser])
    localStorage.setItem('users', JSON.stringify(updated))
    localStorage.setItem('id', newUser.id);
    navigate("/")
  }
  return (
    <div className="parent-container">
      {error && <div>{error}</div>}
      <form onSubmit={onRegister} >
        <div className="name-field">
          <label>First name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="name-field">
          <label>Last name</label>
          <input value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div className="name-field">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="name-field">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="name-field">
           <input type="submit" value={"Register"} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
