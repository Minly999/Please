import React from "react";
import { counterData } from "../../constants, type and data/types";
import axios from "axios";

type DeleteProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: counterData;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CounterDeletePopUp = ({ show, setShow, data, setRerender }: DeleteProps) => {
  document.body.style.overflow = show ? "hidden" : "auto";

  const counterReset = async() => {
    await axios.delete(`http://localhost:3000/apiv3/counterData/${data._id}`)
    setRerender(p => {
        console.log(p);
        return !p
    })
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
      <div className="w-1/4 h-36 bg-primary-blue z-40 flex flex-col items-center">
        <div className="text-white font-semibold text-xl mt-[10px]">
          Are you sure you want to <b>DELETE</b> this counter?
        </div>
        <div className="flex justify-between w-[200px] mt-[10px]">
          <button onClick={() => {
            setShow(false)
            counterReset()
          }} className="bg-green-500 p-2 rounded-xl text-black font-bold px-6">Yes</button>
          <button onClick={() => {
            setShow(false)
          }} className="bg-red-600 p-2 rounded-xl text-black font-bold px-6">No</button>
        </div>
        <div className="mt-[10px] text-gray-400">This process can't be undone</div>
      </div>
    </div>
  ) : null}
</>
);
};
