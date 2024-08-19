import Counter from "../components/Counter"
import { counterData } from "../constants, type and data/types"
import { useEffect, useState } from "react"
import axios from "axios"
import ResetIcon  from "../../../public/svgs/Reload.svg"
import EditIcon from "../../../public/svgs/Edit.svg"
import DeleteIcon from "../../../public/svgs/Delete.svg"
import { CounterResetPopUp } from "./PopUps/CounterResetPopUp"
import { CounterEditPopUp } from "./PopUps/CounterEditPopUp"
import { CounterDeletePopUp } from "./PopUps/CounterDeletePopUp"

export const Counters = () => {

  const [rerender, setRerender] = useState<boolean>(true)

  const [counters, setCounters] = useState<counterData[] | []>([])

  const [showReset, setShowReset] = useState<boolean>(false)

  const [showEdit, setShowEdit] = useState<boolean>(false)

  const [showDelete, setShowDelete] = useState<boolean>(false)

  const [popUpCounterData, setPopUpCounterData] = useState<counterData>({
    _id: "id",
    name: "name",
    count: 0,
    createdData: "date",
    __v: 0
})

  const fetchCounters = async () => {
    const response = await axios.get("http://localhost:3000/apiv3/counterData")
    setCounters(response.data)
  }

  useEffect(() => {
    fetchCounters()
    console.log("fetched")
  }, [rerender])

  return (
    <div>
      <div className="w-full font-brush-script bg-green-400 text-black text-xl font-bold p-1">Counters</div>
      <div className="flex justify-evenly">
        {counters.map((counter, counterIndex) => (
          <div className="flex flex-col" key={counterIndex}>
            <Counter data={counter} />
            <div className="flex justify-evenly">
              <img onClick={() => {
                setShowReset(true)
                setPopUpCounterData(counter)
              }} title="Reset" src={ResetIcon} alt="" className="w-[30px] h-[30px]" />
              <img onClick={() => {
                setShowEdit(true)
                setPopUpCounterData(counter)
              }} title="Edit" src={EditIcon} alt="" className="w-[30px] h-[30px]" />
              <img onClick={() => {
                setShowDelete(true)
                setPopUpCounterData(counter)
              }} title="Delete" src={DeleteIcon} alt="" className="w-[30px] h-[30px]" />
            </div>
          </div>
        ))}
      </div>

      <CounterResetPopUp show={showReset} setShow={setShowReset} data={popUpCounterData} setRerender={setRerender}/>
      <CounterEditPopUp show={showEdit} setShow={setShowEdit} data={popUpCounterData} setRerender={setRerender}/>
      <CounterDeletePopUp show={showDelete} setShow={setShowDelete} data={popUpCounterData} setRerender={setRerender}/>
    </div>
  )
}
