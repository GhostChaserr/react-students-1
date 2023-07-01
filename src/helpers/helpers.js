
export const readLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    if (data === null) {
        return []
    } 
    return JSON.parse(data);
}