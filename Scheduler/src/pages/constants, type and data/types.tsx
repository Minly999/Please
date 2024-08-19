export type tasksForWeekType = taskForDayScheduled[]

export type taskForDayScheduled = { 
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
    }[]
    type: string;
    __v: number;
  } | {}

  export type taskForDay = {
    date: string;
    task:string;
    type: string;
    id: number;
  }

  export type counterData = {
    _id: string,
    name: string,
    count: number,
    createdData: string,
    __v: number,
  }