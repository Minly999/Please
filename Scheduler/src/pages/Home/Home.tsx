import Counter from "../components/Counter";
import { DailyTasks } from "./DailyTasks";
import { Header } from "../components/Header";
import { pages } from "../components/Header";
import { DailyList } from "./DailyList";
import { WeeklyList } from "./WeeklyList";
import { useEffect, useState } from "react";
import axios from "axios";
import { counterData } from "../constants, type and data/types";

export const Home = () => {

  const [counters, setCounters] = useState<counterData[] | []>([])

  const fetchCounters = async () => {
    const response = await axios.get("http://localhost:3000/apiv3/counterData")
    setCounters(response.data)
  }

  useEffect(() => {
    fetchCounters()
  }, [])

  useEffect(() => {

  })

  return (
    <>
      <div className="overflow-hidden">
        <Header page={pages.HOME}/>
        <main className="m-3 w-full">

          {/* Counters */}
          <div className="w-full flex justify-evenly">

            {counters.map((counter, counterIndex) => (
              <Counter key={counterIndex} data={counter} />
            ))}
            

          </div>
          
          {/* tables */}
          <div className="w-full gap-3 flex">
          
            <DailyTasks />
            <div className="flex flex-col w-2/5">
              <DailyList />
              <WeeklyList />
            </div>

          </div>
        </main>
      </div>
    </>
  );
};
