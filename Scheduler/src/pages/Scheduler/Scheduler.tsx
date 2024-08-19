import { Header } from "../components/Header"
import { pages } from "../components/Header"
import { GetDateId } from "../globalFunctions/getDateId"
import { SchedulerPopUp } from "./SchedulerPopUp"
import { SchedulerTable } from "./SchedulerTable"
import { useEffect, useState } from "react"
import axios from "axios"
import { TASKTYPE } from "../constants, type and data/constants"
import { generateObjectId } from "../globalFunctions/generateObjectId"
import { tasksForWeekType } from "../constants, type and data/types"

export const Scheduler = () => {

  
  





  const postAxios = async () => {
    const response = await axios.post("http://localhost:3000/apiv1/Scheduled", {
      date: "15.08",
      _id: generateObjectId(),
      tasks: [
        {
          time: "6am",
          _id: generateObjectId(),
          task: [
            {
              accurateTime: "6:15am",
              taskText: "cook dishes",
              bgColor: "red",
              textColor: "black",
              _id: generateObjectId(),
            },
          ],
        },
      ],
      __v: 0,
      type: TASKTYPE.DAILYSCHEDULED,
    })
  } 

  // postAxios()

  const [schedulerDate, setSchedulerDate] = useState<string>(GetDateId())

  function handleChanegScheduleDate(value: string){
    setSchedulerDate(value)
  }

  // console.log("rerender")

  const [windowSate, setWindowState] = useState<boolean>(false)

  const [windowId, setWindowId] = useState<string | undefined>(undefined)


  // Getting tasks from cloud and assigning them to variable that will be passed to table and popup
  const [tasksForWeek, setTasksForWeek] = useState<tasksForWeekType>([{}]);

  const fetchTasksForWeek = async () => {
    const response = await axios.get("http://localhost:3000/apiv1/Scheduled");
    setTasksForWeek(response.data);
    // console.log(response.data)
    console.log(tasksForWeek);
  };

  useEffect(() => {
    fetchTasksForWeek()
  }, [])



  return (
    <div style={{borderTop: "1px solid transparent"}}>
        <Header page={pages.SCHEDULER} />
        <main className="max-w-[150%] w-[150%] mt-[80px]">
          <div className="flex flex-col w-48">
            <label htmlFor="schedulerDate">Schedule for:</label>
            <input type="date" name="schedulerDate" onChange={(e) => handleChanegScheduleDate(e.target.value)}/>
          </div>

          {}
          <SchedulerTable tasks={tasksForWeek} date={schedulerDate} setState={setWindowState} setWindowId={setWindowId} key={tasksForWeek.length}></SchedulerTable>
          <SchedulerPopUp tasks={tasksForWeek} state={windowSate} setState={setWindowState} windowId={windowId} key={tasksForWeek.length + 1}/>
        </main>
    </div>
  )
}
