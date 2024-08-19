export const formatTime = (number: number) => {
    return number > 12 ? number - 12 + "pm" : number + "am";  
}