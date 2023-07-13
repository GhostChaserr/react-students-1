
const expenses = [
  {
    id:1,
    amount:200,
    date:"2023-07-04"
  },
  {
    id:3,
    amount:1200,
    date:"2023-07-07"
  },
  {
    id:4,
    amount:3000,
    date:"2023-07-08"
  }
]

const filters = {
  minAmount: 300,
  maxAmount: 4000,
  date: "2023-07-07",

}
const res = filterArrayByOptions(expenses, filters)
console.log(res);

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

