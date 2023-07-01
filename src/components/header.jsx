import { Link } from 'react-router-dom'

const Header = () => {
    // edit-expense?expenseId={1}
    return (
        <ul>
            <li>
                {/* <a href="/add-expense">add expense</a> */}
                <Link to={"/add-expense"}>
                    Add Expense
                </Link>
                {/* <a href="/"></a> */}
            </li>
            <li>
                <Link to={"/signin"}>
                    Signin
                </Link>
            </li>
            <li>
                <Link to={"/signup"}>
                    Signup
                </Link>
            </li>
            <li>
                <Link to={"/"}>
                    Home
                </Link>
            </li>
            <li>
                <Link to={"/forgot-password"}>
                    Fogot password
                </Link>
            </li>
        </ul>
    )
}

export default Header