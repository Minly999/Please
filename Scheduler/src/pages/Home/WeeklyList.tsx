import { useState, useEffect } from "react";
import { generateWeeksArray } from "../globalFunctions/generateWeeksArray";
import { taskFormat } from "../To-Do List/PopUpAddingTask";

export const WeeklyList = () => {

    let [toDoList , setToDoList] = useState<true | false | undefined>();

    const todaysWeek = generateWeeksArray()[0]

    const [tasksForWeek, setTasksForWeek] = useState<undefined | {[key: number]: taskFormat}>(undefined)

    useEffect(() => {
        
        if(localStorage.getItem(`to-do_${todaysWeek}`)){
            setToDoList(true)
            setTasksForWeek(JSON.parse(localStorage.getItem(`to-do_${todaysWeek}`)!))
        } else {
            setToDoList(false)
        }
    
      return () => {
        
      }
    }, [])

  return (
    <table className="w-full border-2 border-black">
        <thead>
            <tr>
                <th className="table_header week" colSpan={2}>Tasks for week</th>
            </tr>
        </thead>
        <tbody>
        {toDoList ? (
            // Tasks for today 
            Object.keys(tasksForWeek!).length > 0 ? (
                // Tasks for today
                Object.entries(tasksForWeek!).map((el, index) => (
                    <tr key={index} className="border-2 border-black">
                        <td className="border-r-2 border-black w-1/6 text-lg font-bold text-center">{index + 1}</td>
                        <td className="text-center font-semibold text-lg">{el[1].task}</td></tr>
                ))
            ) : (
                // No tasks in tasksForToday
                <tr><td>No tasks for today</td></tr>
            )
        
        ) : (
            // No tasks for today
            <tr><td>Null</td></tr>
        )}
        </tbody>
    </table>
  )
}
