// generates 5 spans of start and ending of this and 4 next weeks, example:
// 0: "08.07 - 14.07"
// 1: "15.07 - 21.07"
// 2: "22.07 - 28.07"
// 3: "29.07 - 05.08"
// 4: "05.08 - 11.08"

// I DONT KNOW HOW IT WORKS SO BETTER DONT TOUCH IT

export function generateWeeksArray(date?: string){
    let weeksArray: string[] = [];
    let currentDate;
    if(date){
        currentDate = new Date(date);
    } else {
        currentDate = new Date();
    }
    let currentWeekDay = currentDate.getDay(); // 0 (Sun) to 6 (Sat)
    let startOfWeek = currentDate.getDate() - currentWeekDay + (currentWeekDay === 0 ? -6 : 1); // Start from Monday
    let currentWeek = new Date(currentDate.setDate(startOfWeek));

    for (let i = 0; i < 5; i++) {
        let newStartCurrentWeek = new Date(currentWeek);
        newStartCurrentWeek.setDate(currentWeek.getDate() + (i * 7));
        let finalStartCurrentWeekDay = newStartCurrentWeek.getDate().toString().length == 1 ? "0" + newStartCurrentWeek.getDate() : newStartCurrentWeek.getDate()
        let finalStartCurrentWeekMonth = newStartCurrentWeek.getMonth().toString().length == 1 ? "0" + (newStartCurrentWeek.getMonth() + 1) : (newStartCurrentWeek.getMonth() + 1)
        let formattedWeekStart = finalStartCurrentWeekDay + "." + finalStartCurrentWeekMonth;

        let newEndOfWeek = new Date(newStartCurrentWeek);
        newEndOfWeek.setDate(newStartCurrentWeek.getDate() + 6);
        let finalEndOfWeekDay = newEndOfWeek.getDate().toString().length == 1 ? "0" + (newEndOfWeek.getDate() + 1): newEndOfWeek.getDate()
        let finalEndOfWeekMonth = newEndOfWeek.getMonth().toString().length == 1 ? "0" + (newEndOfWeek.getMonth() + 1) : newEndOfWeek.getMonth() + 1
        let endOfWeek = finalEndOfWeekDay + "." + finalEndOfWeekMonth;

        let weekString = formattedWeekStart + " - " + endOfWeek;
        weeksArray.push(weekString);
    }
    return weeksArray;
}