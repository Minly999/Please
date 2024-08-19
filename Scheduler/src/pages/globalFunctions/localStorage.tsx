export function updateLocalStorage(id:string, value: number){
    const counterValue = JSON.stringify(value)
    localStorage.setItem(id, counterValue)
    console.log(JSON.parse(localStorage.getItem(id)!))
}