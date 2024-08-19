import { TASKTYPE } from "../../constants, type and data/constants";
import { tasksForWeekType } from "../../constants, type and data/types";

export const tasks: tasksForWeekType = [
  {
    date: "15.08",
    _id: 1507210791762940,
    tasks: [
      {
        time: "6am",
        _id: 757758578,
        task: [
          {
            accurateTime: "6:15am",
            taskText: "cook dishes",
            bgColor: "red",
            textColor: "black",
            _id: "78235879532879",
          },
        ],
      },
    ],
    __v: 0,
    type: TASKTYPE.DAILYSCHEDULED,
  },
  {},
  {
    date: "16.08",
    id: 1507210791762345,
    tasks: [
      {
        time: "8am",
        id: 531278532178,
        task: [
          {
            accurateTime: "8:35am",
            taskText: "cook cookings",
            bgColor: "green",
            textColor: "black",
            id: "7895387923",
          },
        ],
      },
      {
        time: "3pm",
        id: 4392043,
        task: [
          {
            accurateTime: "3:15pm",
            taskText: "congratulate myself with succes",
            bgColor: "yellow",
            textColor: "black",
            id: "3324432324",
          },
          {
            accurateTime: "3:25pm",
            taskText: "cry",
            bgColor: "yellow",
            textColor: "black",
            id: "332448902324",
          },
        ],
      },
    ],
    type: TASKTYPE.DAILYSCHEDULED,
  },
];
