import { Link } from "react-router-dom";
import { WINDOWS } from "./PopUpAddingTask";
import { popUpProps } from "./PopUpAddingTask";

type AddButtonsProps = {
  setStateFunc: (state: popUpProps | null) => void
}

export const AddButtons: React.FC<AddButtonsProps> = ({ setStateFunc }) => {
  return (
    <div className="flex justify-evenly w-full h-1/3 my-8">
        <button className="py-8 bg-primary-green w-1/5 text-center text-2xl font-bold rounded-3xl" onClick={() => {
          setStateFunc(WINDOWS.DAILY)
        }}>Schedule daily</button>
        <button className="py-8 bg-primary-green w-1/5 text-center text-2xl font-bold rounded-3xl" onClick={() => {
          setStateFunc(WINDOWS.WEEKLY)
        }}>Schedule weekly</button>
        <Link to={"/goals"} className="py-8 bg-primary-violet w-1/5 text-center text-2xl font-bold rounded-3xl">Add goal</Link>
    </div>
  )
}
