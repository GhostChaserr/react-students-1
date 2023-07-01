
import { Navigate } from 'react-router-dom'

const user = {
    name: "george",
    surname: "batsiashvili",
    role:"standart"
}

const RoleProtectedRoute  = (props) => {

    let isAuthed = true;
    // 1.
    if (!isAuthed) {
        return <Navigate to={"/signin"} />
    }

    // 2.
    if (user.role !== props.role) {
        return <Navigate to={"/signin"} />
    }

    return (
        <div>
            {props.children}
        </div>
    )
}

export default RoleProtectedRoute;