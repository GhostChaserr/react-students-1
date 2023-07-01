import logo from './logo.svg';
import './App.css';


// const user = {

// }

const user = {
  id: "123",
  name: "georg",
  surname: "bat",
  email:"george@gmail.com",
  password:"gere"
}

const users = [
  {
    id: "123",
    name: "georg",
    surname: "bat",
    email:"george@gmail.com",
    password:"gere"
  }
]

const expenses = [
  {
    id: "1",
    userId: "123",
    amount: "200",
    type: "income",
    createdAt: "200"
  },
  {
    id: "1",
    userId: "123",
    amount: "200",
    type: "income",
    createdAt: "200"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
