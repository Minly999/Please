import { Link } from "react-router-dom";

export const pages = {
    SCHEDULER: "scheduler" as const,
    TO_DO: "to-do" as const,
    GOALS: "goals" as const,
    PROGRESS: "progress" as const,
    HOME: "home" as const
}

type HeaderProps = {
    page: "scheduler" | "to-do" | "goals" | "progress" | "home"
}

export const Header = ({page}: HeaderProps) => {
  return (
    <header className="w-full flex justify-between content-center text-2xl leading-none flex-wrap bg-primary-blue text-primary-white shadow-sm shadow-black" style={page === pages.SCHEDULER ? {position: "fixed", marginTop: "-1px"} : {}}>
          <div className="p-2 home_img_container">
            <Link to={"/"} className="home_link" />
            <img
              className=" bg-secondary-blue rounded-md"
              width="64"
              height="64"
              src="https://img.icons8.com/laces/64/s.png"
              alt="s"
            />
          </div>
          <nav className="flex justify-between w-3/5 leading-tight items-center">
            <Link className={`nav_link ${page ===  pages.SCHEDULER ? "nav_link_selected" : ""}`}  to={"/scheduler"}>
              Scheduler
            </Link>
            <Link className={`nav_link ${page ===  pages.TO_DO ? "nav_link_selected" : ""}`}  to={"/to-do-list"}>
              To-Do List
            </Link>
            <Link className={`nav_link ${page === pages.GOALS  ? "nav_link_selected" : ""}`}  to={"/goals"}>
              Goals
            </Link>
            <Link className={`nav_link ${page ===  pages.PROGRESS ? "nav_link_selected" : ""}`}  to={"/progress"}>
              Progress
            </Link>
          </nav>
          <div className="m-4 p-2 bg-secondary-blue rounded-lg flex justify-center content-center">
            <button>Add Task</button>
          </div>
        </header>
  )
}
