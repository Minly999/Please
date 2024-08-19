import { Header, pages } from "../components/Header"
import { Counters } from "./Counters"


export const Goals = () => {
  return (
    <div>
        <Header page={pages.GOALS} />
        <Counters />
    </div>
  )
}
