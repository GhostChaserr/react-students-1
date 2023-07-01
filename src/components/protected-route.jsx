
import { Navigate } from 'react-router-dom'
import { readLocalStorage } from '../helpers/helpers';
import { useNavigate } from 'react-router-dom'

const ProtectedRoute  = (props) => {

    console.log(props.name);

    const navigate = useNavigate();
    const userId = localStorage.getItem('id');



    if (userId === null) {
        return (
            <Navigate to={"/signin"} />
        )
    }   

    const users = readLocalStorage('users')
    const user = users.find(user => user.id === parseInt(userId))

    if (!user) {
        <Navigate to={"/signin"} />
    }

    console.log('authed user', user);

    const onSignout = () => {
        // 1. გავასუფთაოთ id
        localStorage.removeItem("id")

        // 2. გავაკეთოთ გადამისამართება
        navigate("/signin")
    }

    return (
        <div>
            <div>
                გამარჯობა: {user.name}
                <button onClick={onSignout}>სისტემიდან გასვლა</button>
            </div>
            {props.children}
        </div>
    )
}


// {/* <ProtectedRoute/> */}

// <ProtectedRoute>
//     <div>
//         .....
//     </div>
// </ProtectedRoute>

export default ProtectedRoute