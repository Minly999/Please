import { useEffect } from "react";
import { GetDateId } from "../globalFunctions/getDateId";
import { useState } from "react";
import { taskFormat } from "../To-Do List/PopUpAddingTask";
import { api } from "../../apis/api";
import axios from "axios";

export const DailyList = () => {
  let [toDoList, setToDoList] = useState<true | false | undefined>();

  const dateId = GetDateId();

  // console.log(localStorage.getItem(`to-do${dateId}`))

  const [tasksForToday, setTasksForToday] = useState<
    undefined | { [key: number]: taskFormat }
  >(undefined);

  useEffect(() => {
    // if(localStorage.getItem(`to-do_${dateId}`)){
    //     setToDoList(true)
    //     setTasksForToday(JSON.parse(localStorage.getItem(`to-do_${dateId}`)!))
    // } else {
    //     setToDoList(false)
    // }

    getTasks();

    return () => {};
  }, []);

  const getTasks = async () => {
    const data = await axios.get("http://localhost:3000/apiv1/Scheduled");
    console.log(data.data[0]);
  };

  return (
    <table className="w-full border-2 border-black">
      <thead>
        <tr>
          <th className="table_header" colSpan={2}>
            Tasks for today
          </th>
        </tr>
      </thead>
      <tbody>
        {toDoList ? (
          // Tasks for today
          Object.keys(tasksForToday!).length > 0 ? (
            // Tasks for today
            Object.entries(tasksForToday!).map((el, index) => (
              <tr key={index} className="border-2 border-black">
                <td className="border-r-2 border-black w-1/6 text-lg font-bold text-center">
                  {index + 1}
                </td>
                <td className="text-center font-semibold text-lg">
                  {el[1].task}
                </td>
              </tr>
            ))
          ) : (
            // No tasks in tasksForToday
            <tr>
              <td>No tasks for today</td>
            </tr>
          )
        ) : (
          // No tasks for today
          <tr>
            <td>Null</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
