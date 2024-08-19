import { useState, useEffect, useRef } from "react";
import { randomTaskPlaceholder } from "../globalFunctions/randomTaskPlaceholder";
import { generateWeeksArray } from "../globalFunctions/generateWeeksArray";
import { createIdBasedOnTime } from "../globalFunctions/cerateIdBasedOnTime";

export const WINDOWS = {
  DAILY: "daily" as const,
  WEEKLY: "weekly" as const,
};

export type popUpProps = typeof WINDOWS.DAILY | typeof WINDOWS.WEEKLY;

type PopUpAddingTaskProps = {
  stater: popUpProps | null;
  setStateFunc: (state: popUpProps | null) => void;
};

export type taskFormat = {
  task: string;
  date: string;
  type: typeof WINDOWS.DAILY | typeof WINDOWS.WEEKLY;
  id: string;
}

export const PopUpAddingTask: React.FC<PopUpAddingTaskProps> = ({
  stater,
  setStateFunc,
}) => {
  const RandomTaskPlaceholder = useRef(randomTaskPlaceholder());

  const [windowState, setWindowState] = useState<popUpProps | null>(stater);

  const [weekPopUp, setWeekPopUp] = useState<boolean>(false);

  const [weekDateInput, setDateWeekInput] = useState<string | undefined>();

  const [dayDateInput, setDayDateInput] = useState<string | undefined>();

  const [taskValue, setTaskValue] = useState<undefined | string>(undefined);

  useEffect(() => {
    setWindowState(stater);
  }, [stater]);

  useEffect(() => {
    RandomTaskPlaceholder.current = randomTaskPlaceholder();
  }, []);

  type handleAddTaskProps = typeof WINDOWS.DAILY | typeof WINDOWS.WEEKLY;
  
  function handleAddTask(type: handleAddTaskProps) {
    function createNewTask(task: taskFormat) {
      if (localStorage.getItem(`to-do_${task.date}`)) {
        let tasks = JSON.parse(localStorage.getItem(`to-do_${task.date}`)!);
        const newTask = {
          ...tasks,
          [task.id]: task,
        };
        localStorage.setItem(`to-do_${task.date}`, JSON.stringify(newTask));
      } else {
        const newTask = {
          [task.id]: task,
        };
        localStorage.setItem(`to-do_${task.date}`, JSON.stringify(newTask));
      }
    }

    if (type === WINDOWS.DAILY) {
      const newTask = {
        task: taskValue!,
        date: dayDateInput!,
        type: WINDOWS.DAILY,
        id: createIdBasedOnTime(),
      };
      createNewTask(newTask);
    } else if (type === WINDOWS.WEEKLY) {
      const newTask = {
        task: taskValue!,
        date: weekDateInput!,
        type: WINDOWS.WEEKLY,
        id: createIdBasedOnTime(),
      };
      createNewTask(newTask);
    }
  }

  return (
    <>
      {windowState ? (
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-screen">
          <div
            className="w-full h-screen absolute z-30 bg-slate-600 opacity-70 top-0 left-0"
            onClick={() => setStateFunc(null)}
          ></div>
          <div className="rounded-xl border-4 border-black w-3/5 h-5/6 z-50 bg-primary-blue opacity-100 relative">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII="
              className="absolute right-1 top-1 w-12 h-12 bg-slate-300 rounded-full cursor-pointer"
              onClick={() => {
                setStateFunc(null);
              }}
            />
            <div className="">
              <div className="">
                <label htmlFor="taskContent" className="text-primary-white m-1">
                  Task
                </label>
                <input
                  type="text"
                  placeholder={RandomTaskPlaceholder.current}
                  id="taskContent"
                  className="m-1"
                  onChange={(e) => {
                    setTaskValue(e.target.value);
                  }}
                />
              </div>
              <div className="flex">
                <label htmlFor="taskDate" className="text-primary-white m-1">
                  Date
                </label>
                {windowState === WINDOWS.DAILY ? (
                  <input
                    type="date"
                    name=""
                    id=""
                    className="m-1"
                    onChange={(e) => {
                      setDayDateInput(e.target.value);
                    }}
                  />
                ) : (
                  <div className="flex flex-col w-44">
                    <input
                      type="text"
                      readOnly
                      onFocus={() => setWeekPopUp(true)}
                      value={weekDateInput}
                      className="m-1"
                    />
                    {weekPopUp ? (
                      <div className="flex flex-col">
                        {generateWeeksArray().map((el, index) => (
                          <div
                            key={index}
                            className="cursor-pointer bg-white hover:bg-slate-500 text-black hover:text-primary-white"
                            onClick={() => {
                              setDateWeekInput(el);
                              setWeekPopUp(false);
                            }}
                          >
                            {el}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
              <button
                className="w-16 h-8 text-primary-white bg-cyan-500"
                onClick={() => {
                  if (taskValue && (dayDateInput || weekDateInput)) {
                    windowState === WINDOWS.DAILY
                      ? handleAddTask(WINDOWS.DAILY)
                      : handleAddTask(WINDOWS.WEEKLY);
                  }
                }}
              >
                Add
              </button>
            </div>
            {/* group of inputs/labels/buttons */}
          </div>{" "}
          {/*  */}
        </div>
      ) : null}
    </>
  );
};
