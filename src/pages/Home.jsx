import { Link } from "react-router-dom";

const Home = () => {

    const expenses = [
        {
            id: 1,
            type: "income",
            amount: 200,
        },
        {
            id: 2,
            type: "income",
            amount: 200,
        },
        {
            id: 3,
            type: "income",
            amount: 200,
        }
    ]
    
    return (
        <div>
            {expenses.map((exp) => {
                return (
                    <div key={exp.id}>
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