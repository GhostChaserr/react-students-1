const ExpensesFeed = (props) => {
    const expenses = props.currentExpenses;

    return (
        <div>
            {expenses.map((expense) => (
                <div key={expense.id}>
                    <div>
                        Created at: {expense.date}
                        Category: {expense.category}
                        Amount: {expense.amount}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExpensesFeed