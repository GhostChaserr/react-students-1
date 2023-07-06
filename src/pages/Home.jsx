import { Link } from "react-router-dom";
import { useContext } from 'react'


// .dark
// .light

// Default export
// import CounterContext  from '../contex'

// Named export
import { CounterContext } from '../contex'
import { readLocalStorage } from "../helpers/helpers";

const Home = () => {
    const payload = useContext(CounterContext);

    // 1. Load all expenses
    const expenses = readLocalStorage("expenses")

    // 2. Read current user session
    const currentUserId = localStorage.getItem('id');

    const usersExpenses = expenses.filter((item) => item.userId === parseInt(currentUserId));
    console.log("User Expenses", usersExpenses);

    console.log({
        expenses,
        currentUserId
    })

    const handleCountUpdate = () => {
        payload.onCountUpdate();
    }
    // const expenses = [
    //     {
    //         id: 1,
    //         type: "income",
    //         amount: 200,
    //     },
    //     {
    //         id: 2,
    //         type: "income",
    //         amount: 200,
    //     },
    //     {
    //         id: 3,
    //         type: "income",
    //         amount: 200,
    //     }
    // ]
    
    const theme = "dark"
    return (
        <div>
            <button onClick={() => {
                payload.onCountUpdate();
            }}>
                + Add items {payload.count}
            </button>
            {usersExpenses.map((exp) => {
                return (
                    <div  key={exp.id}>
                        Expense ID {exp.id}
                        Expense amount {exp.amount}
                        <Link to={"/expenses/" + exp.id}>
                            Edit expense
                        </Link>
                        <Link to={"/edit-expense?expenseId=" + exp.id}>
                            Edit expense Query params
                        </Link>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Home;