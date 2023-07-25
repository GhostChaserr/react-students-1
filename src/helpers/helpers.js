
export const readLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    if (data === null) {
        return []
    } 
    return JSON.parse(data);
}

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
