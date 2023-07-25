
import { useState, useEffect } from 'react'
import { readLocalStorage } from '../helpers/helpers'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../firebase'

const SignIn = (props) => {


    

    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // 1
    useEffect(() => {

    }, [])

    // 2
    useEffect(() => {

    }, [setEmail])

    // 3.
    useEffect(() => {
      return () => {
        console.log("running")
      }
    }, [])



    const onFormSubmit = async (e) => {
        e.preventDefault()

        const user = await signIn(email, password);
        console.log(user);
        // const users = readLocalStorage('users')

        // // 1. მეილით არსებობს თუ არა რეგისტირირებული მომხამრებელი
        // const user = users.find(user => user.email === email);
        // if (!user) {
        //     setError('მომხმარებელი არ მოიძებნა')
        //     return;
        // }
        // // 2. პაროლი ემთხვევა მომხამრებლის პაროლს
        // const passwordValid = user.password === password;
        // console.log('pass check',passwordValid);

        // if (!passwordValid) {
        //     setError('პაროლია არასწორი')
        //     return;
        // }

        // 3.
        // localStorage.setItem('id', user.id);
        // navigate("/")

    }
    return (
        <form onSubmit={onFormSubmit}>
            {error && <div>{error}</div>}
           <div>
             <label>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
             </label>
           </div>
           <div>
             <label>
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
             </label>
           </div>
           <div>
             <label>
                <input type='submit' value={"signin"}/>
             </label>
           </div>
        </form>
    )
}


export default SignIn