import { generateWeeksArray } from "../globalFunctions/generateWeeksArray";
import { GetDateId } from "../globalFunctions/getDateId";

// console.log(generateWeeksArray())

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

let ultra = [["t", "y"]];
// console.log(ultra);

export const PendingTasks = () => {
  const todaysWeek = generateWeeksArray()[0];
  const mondayDate = todaysWeek.split(" ")[0].split(".")[0];
  const mondayMonth = todaysWeek.split(" ")[0].split(".")[1];
  const monday = new Date(2024, Number(mondayMonth), Number(mondayDate));

  function getTasks() {
    let tasks: any[] = [];
    weekDays.forEach((el, index) => {
      let dayOfTask = GetDateId(
        2024,
        monday.getMonth() - 1,
        monday.getDate() + index
      );
      let task;
      let newTask;
      if (localStorage.getItem(`to-do_${dayOfTask}`)) {
        task = JSON.parse(localStorage.getItem(`to-do_${dayOfTask}`)!);
        newTask = Object.entries(task);
      }
      tasks.push(newTask);
    });
    return tasks;
  }

  getTasks().forEach((taskList, taskIndex) => {
    console.log(getTasks());
    if (taskList) {
      console.log(taskList[0]);
      if (taskList.length === 1) {
        console.log(taskList[0][1].task);
        // } else {
        //     taskList.forEach((taskItem: {task: string}, innerIndex: number) => {
        //     console.log(taskItem.task)
        // })
      }
    }
  });

  function getTasksTasks() {
    let array: any[] = [];
    let tuppleArray: string[] = [];

    getTasks().forEach((taskList, taskIndex) => {
      if (taskList) {
        if (taskList.length === 1) {
          tuppleArray.push(taskList[0][1].task);
          array.push(tuppleArray);
        } else {
          taskList.forEach((el, index) => {
            tuppleArray.push(el[1].task);
          });
          array.push(tuppleArray);
        }
      } else {
        array.push("no");
      }
      tuppleArray = [];
    });

    return array;
  }

  console.log(getTasksTasks());

  return (
    <section className="w-full">
      {/* current week with heading of weekly tasks, ability to scroll sidewards for month */}
      <main className="m-4 border-2 border-black text-center">
        <header>Pending tasks</header>
        {/* week scroll, below */}
        <div className="flex">
          {weekDays.map((weekDay, weekIndex) => (
            <div className="flex flex-col w-1/7" key={weekIndex}>
              <div>{weekDay}</div>
              <div className="flex flex-col">
                {weekIndex >= 0 &&
                getTasksTasks()[weekIndex] &&
                getTasksTasks()[weekIndex] !== "no"
                  ? getTasksTasks()[weekIndex].map((task, taskIndex) => (
                      <span key={`${weekIndex}-${taskIndex}`}>{task}</span>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
        {/* weekly tasks */}
        <div className=""></div>
      </main>
    </section>
  );
};
