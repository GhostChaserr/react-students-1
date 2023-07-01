import { useParams } from "react-router-dom"


const EditExpenseDynamic = () => {
    const params = useParams();

    const isNotNumber = isNaN(params.id);
    if (isNotNumber) return (
        <div>
            error. wrong ID
        </div>
    )

    return (
        <div>
            Edit params ... {params.id}
        </div>
    )
}

export default EditExpenseDynamic