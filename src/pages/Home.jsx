import { Link } from "react-router-dom";
import { useContext, useState , useEffect} from 'react'


// .dark
// .light

// Default export
// import CounterContext  from '../contex'

// Named export
import { readLocalStorage } from "../helpers/helpers";
import Filters from "../components/filters";
import ExpensesFeed from "../components/expenses-feed";




function filterArrayByOptions(array, filters) {
    return array.filter(item => {
      if (filters.minAmount && item.amount < filters.minAmount) {
        return false;
      }
      
      if (filters.maxAmount && item.amount > filters.maxAmount) {
        return false;
      }
      
      if (filters.date && item.date !== filters.date) {
        return false;
      }
      
      return true;
    });
  }

const Home = () => {
    const [currentExpenses, setCurrentExpenses] = useState([])

    const onFiltersSelect = (filters) => {


        // 1. თუ ფილტრი ცარიელია
        const filterKeysLength = Object.keys(filters).length;
        if (filterKeysLength === 0) {
            const expenses = readLocalStorage("expenses");
            setCurrentExpenses(expenses);
            return
        }
        const filteredExpenses = filterArrayByOptions(currentExpenses,filters);
        setCurrentExpenses(filteredExpenses);

    }

    // 1 სცენარი: კომპონენტის ჩატვირთვა.
    useEffect(() => {
        const expenses = readLocalStorage("expenses");
        setCurrentExpenses(expenses);
    }, [])


    // 2 სცენარი: კომპონენტის რე-რენდერი, update
    useEffect(() => {
        console.log("შეიცვალა!!")
    }, [currentExpenses, setCurrentExpenses])

    // 3. სცენარი: კომპონენტი ტოვებს დომს
    useEffect(() => {
        return () => {
            console.log("კომპონენტმა დომი დატოვა!")
        }
    }, [])


    return (
        <div>
            <Filters onFiltersSelect={onFiltersSelect}/>
            <ExpensesFeed currentExpenses={currentExpenses}/>
        </div>
    )
}

export default Home;