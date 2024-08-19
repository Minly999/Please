different tasks strcture with types

tasksForWeek object is used for mapping over it creating table on page SCHEDULER, its received from api request (api.get())


tasksForWeek = {      <--- its object array
  date: string; format "05.07"
  id: number; 
              id based on current date and time 
              (check src\pages\globalFunctions\cerateIdBasedOnTime.tsx),
              format 2024516131826142 
  tasks: {
    time: string;
                 format "6am" "3pm" etc.
    task: {
        accurateTime: string; 
                            format "6:30am" or "7:14pm"
        task: string;
                            format "wash dishes"
    }[];
                 
    *1
    id: number;
                 same as line 8 - 10
  }[]
  type: string;
                 represents type of tasks to filter before using
                 in thsi case is always 
                 "dailyScheduled"
                 other values for filter check in "Type property"
}[]



Type property

represents type of tasks to filter before using
values can be as below and assigned in constant (check src\pages\constants and data\constants.tsx)
        "daily" task asigned for particular date and doesnt have time
        "weekly" tasks asigned for particular week and doesnt have day/time
        "dailyScheduled" tasks assigned for particular day and have array of tasks for particular time
  
*1 status: boolean;
                 false - uncompleted task, true - completed task
                 Feature: should disappear in three days after out of due (option to reasign or archive it) or after completing (option to archive it)
                 P.S.: Feature isnt released in that moment        