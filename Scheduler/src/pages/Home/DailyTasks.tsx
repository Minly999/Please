let timeArray: number[] = [];

for (let i = 6; i < 23; i++) {
  timeArray.push(i);
}

export const DailyTasks = () => {
  function formatTime(number: number) {
    return number > 12 ? number - 12 + "pm" : number + "am";
  }

  return (
    <table className="w-4/7">
      <thead className="bg-secondary-blue text-black text-2xl">
        <tr>
          <th className="p-2 w-full border-2 border-black" colSpan={2}>
            Daily tasks
          </th>
        </tr>
      </thead>
      <tbody>
        {timeArray.map((el, index) => (
          <tr key={index}>
            <td className="p-2 w-1/6 border-2 border-black text-center text-xl">
              {formatTime(el)}
            </td>
            <td className="p-2 w-5/6 border-2 border-black"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
