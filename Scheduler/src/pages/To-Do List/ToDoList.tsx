import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { pages } from "../components/Header"
import { AddButtons } from "./AddButtons"
import { PendingTasks } from "./PendingTasks"
import { PopUpAddingTask } from "./PopUpAddingTask"
import { popUpProps } from "./PopUpAddingTask"

export const ToDoList = () => {

  const [popUpState, setPopUpState] = useState<popUpProps | null>(null)

  function updatePopUpState(state: popUpProps | null){
    setPopUpState(state)
  }

  useEffect(() => {
    console.log(popUpState)
  
    return () => {
      
    }
  }, [popUpState])
  

  return (
    <>
        <Header page={pages.TO_DO} />
        <main className="">
            <AddButtons setStateFunc={updatePopUpState}/>

            {/* Conditional rendered pop-up */}
            <PopUpAddingTask stater={popUpState} setStateFunc={updatePopUpState}/>

            <PendingTasks />
        </main>
    </>
  )
}
