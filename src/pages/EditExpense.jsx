import { useParams, useSearchParams } from 'react-router-dom'

const EditExpense = () => {

    // 2. ველით რომ query პარამეტრში უნდა იყოს
    let [searchParams, setSearchParams] = useSearchParams();

    const expenseId = searchParams.get("expenseId");
 
    console.log(expenseId);
    

    return (
        <div>
            <button>Update URL parameters</button>
            Edit expense query params...{expenseId}
        </div>
    )
}

export default EditExpense