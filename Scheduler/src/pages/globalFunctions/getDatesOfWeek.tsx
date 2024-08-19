import { generateWeeksArray } from "./generateWeeksArray";

// gets 7 dates of current week in array

export const getDatesOfWeek = (date?: string) => {
  let currentWeek
  if(date){
    // console.log(date)
    currentWeek = generateWeeksArray(date)[0];
  } else{
    currentWeek = generateWeeksArray()[0];
  }
  let startOfWeek = currentWeek.split(" - ")[0];
  let currentYear = new Date().getFullYear();
  // console.log(currentYear)
  let [day, month] = startOfWeek.split(".").map(Number);
  let currentDate = new Date(currentYear, month, day);
  let tempDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  let array = [];
  for (let i = 0; i < 7; i++) {
    tempDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    tempDate.setDate(currentDate.getDate() + i);
    let dateFormated =
      (tempDate.getDate().toString().length == 1
        ? "0" + tempDate.getDate()
        : tempDate.getDate()) +
      "." +
      (tempDate.getMonth().toString().length == 1
        ? "0" + tempDate.getMonth()
        : tempDate.getMonth());
    array.push(dateFormated);
  }

  // console.log(array);
  return array;
};
