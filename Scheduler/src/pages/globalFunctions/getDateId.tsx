// Gets todays date

export function GetDateId(posYear?: number, posMonth?: number, posDay?: number){
    const unformatedDate = posYear && posMonth && posDay ? new Date(posYear, posMonth, posDay) : new Date()
    const year = unformatedDate.getFullYear()
    const newMonths = unformatedDate.getMonth() + 1
    const months = newMonths.toString().length === 1 ? "0" + newMonths : newMonths
    const day = unformatedDate.getDate().toString().length === 1 ? "0" + unformatedDate.getDate() : unformatedDate.getDate()
    const todayDate = year + "-" + months + "-" + day
    return todayDate
}