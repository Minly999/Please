import { getDatesOfWeek } from "../globalFunctions/getDatesOfWeek";
import "./Scheduler.css";
import { useEffect, useState } from "react";
import {
  taskForDayScheduled,
  tasksForWeekType,
} from "../constants, type and data/types";
import { tasks } from "./data/PlaceholderData";
import { formatTime } from "../globalFunctions/formatTime";
import { generateWeeksArray } from "../globalFunctions/generateWeeksArray";
import axios from "axios";

let timeArray: number[] = [];

for (let i = 6; i < 23; i++) {
  timeArray.push(i);
}

type SchedulerTableProps = {
  date: string;
  setState: (state: boolean) => void;
  setWindowId: (id: string) => void;
  tasks: tasksForWeekType;
};

export const SchedulerTable = ({
  date,
  setState,
  setWindowId,
  tasks,
}: SchedulerTableProps) => {
  const getDatesOfWeekVar = getDatesOfWeek(date);

  const sevenEleven = [0, 1, 2, 3, 4, 5, 6];

  const PopUpAddingTask = (id: string) => {
    setState(true);
    setWindowId(id);
  };

  const [tasksForWeek, setTasksForWeek] = useState<tasksForWeekType>(tasks);

  useEffect(() => {
    console.log(tasksForWeek);
  }, [tasks]);

  function getTaskForHour(index: number, hour?: string) {
    // Check if tasksForWeek is defined and is an array
    if (!tasksForWeek || !Array.isArray(tasksForWeek)) {
      return null;
    }

    // Check if tasksForWeek[index] is defined
    if (!tasksForWeek[index]) {
      return null;
    }

    // Check if tasksForWeek[index] is not a plain object

    if (Object.keys(tasksForWeek[index]).length == 0) {
      return null;
    }

    const taskForDay = tasksForWeek[index];

    // Check if taskForDay.tasks is defined and is an array
    //@ts-ignore
    if (!taskForDay.tasks || !Array.isArray(taskForDay.tasks)) {
      return null;
    }

    // Iterate through tasks to find the task for the specified hour
    //@ts-ignore
    for (let i = 0; i < taskForDay.tasks.length; i++) {
      //@ts-ignore
      const currentTask = taskForDay.tasks[i];

      if (currentTask && currentTask.time === hour) {
        return currentTask;
      }
    }

    return null;
  }

  return (
    <div>
      <table className="scheduler-table">
        <thead>
          <tr>
            <td className="text-center w-[100wh]" colSpan={4}>
              Displaying for {generateWeeksArray()[0]}
            </td>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td className="time_cells"></td>
            {getDatesOfWeekVar.map((el, index, _array) => (
              <td key={index}>{el}</td>
            ))}
          </tr>
          {timeArray.map((time, timeIndex) => (
            <tr key={timeIndex}>
              <td className="time_cells">{formatTime(time)}</td>
              {sevenEleven.map((_element, indexx) => (
                <td
                  key={indexx}
                  className="task_cell"
                  id={`${getDatesOfWeekVar[indexx]}_${formatTime(time)}`}
                  onClick={(e) => {
                    // @ts-ignore
                    PopUpAddingTask(e.target.id);
                  }}
                >
                  <div className="">
                    {/* @ts-ignore */}
                    {getTaskForHour(indexx, formatTime(time)) != null
                      ? getTaskForHour(indexx, formatTime(time))!.task.map(
                          (
                            preciseTaskEl: {
                              accurateTime: string;
                              taskText: string;
                              bgColor: string;
                              textColor: string;
                              _id: string;
                            },
                            preciseTaskIndex: number
                          ) => (
                            <div
                              key={preciseTaskIndex}
                              className={`flex justify-between w-[90%] mx-auto my-4 rounded-[10px]`}
                              style={{
                                backgroundColor: preciseTaskEl.bgColor,
                              }}
                              onMouseOver={() => {
                                document.getElementById(
                                  preciseTaskEl._id
                                )!.style.display = "block";
                              }}
                              onMouseLeave={() => {
                                document.getElementById(
                                  preciseTaskEl._id
                                )!.style.display = "none";
                              }}
                            >
                              <div
                                className="flex flex-col ml-2"
                                style={{ color: preciseTaskEl.textColor }}
                              >
                                <div className="">{preciseTaskEl.taskText}</div>
                                <div className="">
                                  {preciseTaskEl.accurateTime}
                                </div>
                              </div>
                              <div
                                className="mr-2"
                                id={preciseTaskEl._id}
                                style={{ display: "none" }}
                              >
                                <button className="w-5 h-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          )
                        )
                      : null}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
