import React from "react";
import { counterData } from "../../constants, type and data/types";

type EditProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: counterData;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CounterEditPopUp = ({ show, setShow, data, setRerender }: EditProps) => {
  document.body.style.overflow = show ? "hidden" : "auto";

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
          <div className="w-1/4 h-24 bg-primary-blue z-40"></div>
        </div>
      ) : null}
    </>
  );
};
