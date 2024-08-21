import React, { useEffect, useState } from "react";
import { counterData } from "../../constants, type and data/types";
import axios from "axios";
import { generateObjectId } from "../../globalFunctions/generateObjectId";
import { getDatesOfWeek } from "../../globalFunctions/getDatesOfWeek";

type AddNewProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CounterAddNew = ({ show, setShow, setRerender }: AddNewProps) => {
  document.body.style.overflow = show ? "hidden" : "auto";

  const [nameInput, setNameInput] = useState<string>("")

  const [countInput, setCountInput] = useState<number>(0)

  const handleCounterCreate = async() => {
    const weekIndex = new Date().getDay()
    const counter = {
        id: generateObjectId(),
        name: nameInput,
        count: countInput,
        createdData: getDatesOfWeek()[weekIndex - 1],
        __v: 0,
    }
    await axios.post("http://localhost:3000/apiv3/counterData", counter)
    setShow(false)
    setRerender(p => !p)
  }

  return (
    <>
      {show ? (
        <div
          className="w-full h-screen flex justify-center items-center absolute"
          style={{ top: window.scrollY + "px", left: window.scrollX + "px" }}
        >
          <div
            className="w-full h-screen absolute z-30 bg-slate-600 opacity-70 top-0 left-0"
            onClick={() => setShow(false)}
          ></div>
          <div className="w-2/5 h-[35vh] bg-primary-blue z-40 flex flex-col items-center rounded-lg">
            <div className="mt-[40px] text-xl text-white font-medium">Adding new counter</div>
            <div className="mt-[40px] flex">
              <label htmlFor="name" className="mr-[10px] text-white font-medium text-xl">Name: </label>
              <input className="px-1 text-xl" id="name" type="text" value={nameInput} onChange={(e) => {setNameInput(e.target.value)}} />
            </div>
            <div className="mt-[10px] flex">
              <label htmlFor="count" className="mr-[10px] text-white font-medium text-xl">Count: </label>
              <input className="-ml-[1px] px-1 text-xl" type="number" id="count" value={countInput} onChange={(e) => {
                if(Number(e.target.value) >= 0){
                  e.target.style.outlineColor = "black"
                  setCountInput(Number(e.target.value))
                } else {
                  e.target.style.outlineColor = "red"
                }
              }}/>
            </div>
            <div className="mt-[40px] flex justify-between w-1/3">
              <button onClick={handleCounterCreate} className="bg-green-500 p-3 rounded-xl font-bold text-xl">Add</button>
              <button onClick={() => {
                setNameInput("");
                setCountInput(0);
                setShow(false)
              }} className="bg-red-600 p-3 rounded-xl font-bold text-xl">Discard</button>
            </div>
            
          </div>
        </div>
      ) : null}
    </>
  );
};