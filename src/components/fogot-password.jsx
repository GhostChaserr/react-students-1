import {  useState} from 'react'
import { readLocalStorage } from '../helpers/helpers';
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")
    const [currentUser, setCurrentUser] = useState()
    const [showRestPassword, setShowResetPassword] = useState(false);
    const [email, setEmail] = useState('')

    const [newPassword, setNewPassword] = useState('')

    const onForgotPassword = (e) => {
        e.preventDefault();

        const users = readLocalStorage('users')
        const user = users.find(user => user.email === email);
        if (!user) {
            setError('user not found!')
            return;
        }
        setShowResetPassword(true);
        setCurrentUser(user)


    }

    const onPassswordChange = () => {
        const users = readLocalStorage('users')
        const updated = users.map(user => {
            if (user.id === currentUser.id) {
                return {
                    ...user,
                    password: newPassword,
                }
            } else {
                return user;
            }
        })
        localStorage.setItem('users', JSON.stringify(updated))
        setMessage('პაროლი შეიცვალა აღარ დაგავიწყდეს!')
    
    }

    return (
        <div>
            {message && <h1>{message}</h1>}
            <form onSubmit={onForgotPassword}>
                {error && <div>{error}</div>}
                <label>
                    აღადგინე ანგარიში:
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    {!showRestPassword && (
                        <input type='submit' value={"პაროლის აღდგენა"} />
                    )}
   
                </label>
            </form>
            <div>
                {showRestPassword && (
                    <div>
                        <label>
                            შეიყვანე ახალი პაროლი:
                        </label>
                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                        <button onClick={onPassswordChange}>პარილის შეცვლა:</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ForgotPassword