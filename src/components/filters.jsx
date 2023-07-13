import { useState } from "react"


const Filters = (props) => {

    const [minAmount, setMinAmount] = useState()
    const [maxAmount, setMaxAomunt] = useState();
    const [date, setSelectedDate] = useState();
    const [selectedCategory, setSelectedCategory] = useState();

    const onMinAmountChange = (e) => setMinAmount(e.target.value);
    const onMaxAmountChange = (e) => setMaxAomunt(e.target.value);
    const onDateChange = (e) => setSelectedDate(e.target.value);
    const onSelectedCategoryChange = (e) => setSelectedCategory(e.target.value);

    // value={this.state.value} onChange={this.handleChange}

    const onFormSubmit = (e) => {
        e.preventDefault();

        let filters = {}
        if (minAmount) {
            filters["minAmount"] = parseInt(minAmount )
        }

        if (maxAmount) {
            filters["maxAmount"] = parseInt(maxAmount)
        }

        if (date) {
            filters["date"] =  date;
        }

        if (selectedCategory) {
            filters["category"] = selectedCategory
        }


        props.onFiltersSelect(filters);

    }

    return (
        <div>
            <form onSubmit={onFormSubmit} style={{ display: "flex" }}>
                <div>
                    <label>Enter min amount:</label>
                    <input value={minAmount} onChange={onMinAmountChange} type="number"/>
                </div>
                <div>
                    <label>Enter max amount:</label>
                    <input value={maxAmount} onChange={onMaxAmountChange} type="number"/>
                </div>
                <div>
                    <label>Pick date:</label>
                    <input value={date} onChange={onDateChange} type="date"/>
                </div>
                <div>
                    <select value={selectedCategory} onChange={onSelectedCategoryChange}>
                        <option value="shopping">Shopping</option>
                        <option value="invoice">Invoice</option>
                    </select>
                </div>
                <div>
                    <input value={"filter"} type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Filters