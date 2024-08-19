import { useState } from "react";
import React from "react";
import { generateObjectId } from "../globalFunctions/generateObjectId";
import { taskForDayScheduled, tasksForWeekType } from "../constants, type and data/types";
import { TASKTYPE } from "../constants, type and data/constants";

export const colorsArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "black",
  "purple",
];

export const textColorsArray = [
  "black",
  "gray",
  "white",
  "red",
  "green",
  "blue",
];

type SchedulerPopUpProps = {
  state: boolean;
  setState: (state: boolean) => void;
  windowId: string | undefined;
  tasks: tasksForWeekType;
};

export const SchedulerPopUp = ({
  state,
  setState,
  windowId,
  tasks,
}: SchedulerPopUpProps) => {
  const [inputBg, setInputBg] = useState<string>("white");

  const [inputColor, setInputColor] = useState<string>("black");

  const [timeAdd, setTimeAdd] = useState<number>(0)

  const [taskText, setTaskText] = useState<string>("")

  document.body.style.overflow = state ? "hidden" : ""

  function iCantHandleChaaaaange(e: React.WheelEvent<HTMLDivElement>) {
    if(e.deltaY < 0){
      setTimeAdd(p => p >= 59 ? 59 : p + 1)
    } else {
      setTimeAdd(p => p <= 0 ? 0 : p - 1)
    }
    console.log(timeAdd)
  }

  function accurateTime(){
    return windowId?.split("_")[1].slice(0, -2) + (timeAdd != 0 ? `:${timeAdd >= 10 ? timeAdd : "0" + timeAdd}` : "" ) + windowId?.split("_")[1].slice(-2)
  }

  function submitForm(){
    let todaysTask;
    tasks.forEach((task:taskForDayScheduled, taskIndex) => {
      // @ts-ignore
      if(task.date == windowId?.split("_")[0]){
        todaysTask = task
      }
    })
    let task = {
      accurateTime: accurateTime(),
      taskText: taskText,
      bgColor: inputBg,
      textColor: inputColor,
      _id: generateObjectId(),
    }

    let fullTask:{
      date: string;
      _id: string;
      tasks: {
          time: string;
          _id: string;
          task: {
              accurateTime: string;
              taskText: string;
              bgColor: string;
              textColor: string;
              _id: string;
          }[];
      }[];
      type: string;
      __v: number;
  }

    if(todaysTask){
      fullTask = todaysTask
      // @ts-ignore
      fullTask.tasks.forEach((taskCollection, taskCollectionIndex) => {
        if(taskCollection.time == windowId?.split("_")[1]){
          fullTask.tasks[taskCollectionIndex].task.push(task)
        } else {
          fullTask.tasks.push({
            time: windowId?.split("_")[1]!,
            _id: generateObjectId(),
            task: [task]
          })
        }
      })
    } else {
      fullTask = {
        date: windowId?.split("_")[0]!,
        _id: generateObjectId(),
        tasks: [{
            time: windowId?.split("_")[1]!,
            _id: generateObjectId(),
            task: [task],
        }],
        type: TASKTYPE.DAILYSCHEDULED,
        __v: 0,
    }
    
    }

  }

  return (
    <>
      {state ? (
        <div
          className={`flex justify-center items-center absolute w-full h-screen`}
          style={{ top: window.scrollY + "px", left: window.scrollX + "px" }}
        >
          <div
            className="w-full h-screen absolute z-30 bg-slate-600 opacity-70 top-0 left-0"
            onClick={() => setState(false)}
          ></div>
          <div className="rounded-xl border-4 border-black w-3/5 h-5/6 z-50 bg-primary-blue opacity-100 relative">
            <div className="flex max-w-[50%] w-full mx-auto flex-col mt-10">
              <div className="text-4xl font-bold text-center text-white mt-5">
                Setting task for:
              </div>
              <div className="text-4xl font-bold text-center text-white mt-5">
                {windowId?.split("_")[0]}
              </div>
              <div className="relative">
                <div className="text-4xl font-bold text-center text-white mt-5" onWheel={(e) => iCantHandleChaaaaange(e)}>
                {accurateTime()}
                </div>
                <div className="absolute text-gray-400 font-normal text-lg top-[30px] right-[40px]">*scroll for adjustment*</div>
              </div>
              
            </div>
            <div className="mx-auto flex mt-30 justify-center">
              <input
                type="text"
                className="w-[400px] h-[60px] block text-4xl pl-1 rounded-l-[10px]"
                style={{ backgroundColor: inputBg, color: inputColor }}
                onChange={(e) => setTaskText(e.target.value)}
              />
              <button className="bg-green-500 w-[120px] rounded-r-[10px]" onClick={submitForm}>Add</button>
            </div>

            <div className="max-w-[50%] w-fit mx-auto mt-10">
              <div className="text-center text-4xl font-bold my-6 text-white">
                Bg:
              </div>
              <div className="flex justify-between">
                {colorsArray.map((el: string, index: number) => (
                  <div key={index}
                    className="rounded-full w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: el }}
                    onClick={() => {
                      setInputBg(el);
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="max-w-[50%] w-fit mx-auto mt-10">
              <div className="text-center text-4xl font-bold my-6 text-white">
                Text:
              </div>
              <div className="flex justify-between">
                {textColorsArray.map((el: string, index: number) => (
                  <div key={index}
                    className="rounded-full w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: el }}
                    onClick={() => {
                      setInputColor(el);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
