import { useState } from "react";
import { updateLocalStorage } from "../globalFunctions/localStorage";
import { useEffect } from "react";
import { counterData } from "../constants, type and data/types";
import axios from "axios";

type CounterProps = {
  data: counterData;
};


const Counter = ({ data }: CounterProps) => {

  const [counterData, setCounterData] = useState<counterData>(data)

  function counterUpdate(value: string) {
    setCounterData((prevState: counterData) => {
      let newCount = prevState.count;
  
      switch (value) {
        case "-":
          newCount -= 1;
          break;
        case "+":
          newCount += 1;
          break;
        case "-10":
          newCount -= 10;
          break;
        case "+10":
          newCount += 10;
          break;
        default:
          console.error(`Value: ${value} is not acceptable`);
          return prevState; // Return current state if the value is not acceptable
      }
  
      // Return a new state object with the updated count
      return { ...prevState, count: newCount };
    });
  }

  const databaseUpdateCounter = async() => {
    try {
      await axios.patch(`http://localhost:3000/apiv3/counterData/${counterData._id}`, counterData);
      console.log('Update successful');
    } catch (error: any) {
      console.error('Error updating counter data:', error.response || error.message);
    }
  }

  useEffect(() => {
    databaseUpdateCounter()
    console.log(counterData)
  }, [counterData])

  useEffect(() => {
    setCounterData(data);
  }, [data]);

  return (
    <main>
      <span className="counter_label">{counterData.name}</span>

      <div className="bg-secondary-blue rounded-full w-40 h-40 border-2 border-primary-blue flex flex-col justify-center counter">
        <div className="flex justify-evenly text-center">
          <button
            className="counter_btn top"
            onClick={() => {
              counterUpdate("-");
            }}
          >
            -
          </button>
          <button
            className="counter_btn top"
            onClick={() => {
              counterUpdate("+");
            }}
          >
            +
          </button>
        </div>
        <div className=" h-12 flex justify-center items-center">
          <div
            className="h-12 w-24 bg-primary-blue text-center text-primary-white text-3xl"
            style={{ lineHeight: "3rem" }}
            id={`counterValue${counterData.name}`}
          >
            {counterData.count}
          </div>
        </div>
        <div className="flex justify-evenly text-center">
          <button
            className="counter_btn bottom"
            onClick={() => {
              counterUpdate("-10");
            }}
          >
            -10
          </button>
          <button
            className="counter_btn bottom"
            onClick={() => {
              counterUpdate("+10");
            }}
          >
            +10
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
