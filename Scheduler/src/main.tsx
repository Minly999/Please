import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home/Home.tsx";
import { Scheduler } from "./pages/Scheduler/Scheduler.tsx";
import { ToDoList } from "./pages/To-Do List/ToDoList.tsx";
import { Goals } from "./pages/Goals/Goals.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <>Dashboard</>
  },
  {
    path: "/scheduler",
    element: <Scheduler />
  },
  {
    path: "/to-do-list",
    element: <ToDoList/>
  },
  {
    path: "/goals",
    element: <Goals/>
    // add child routes for adding goal etc.
  },
  {
    path: "/progress",
    element: <>Progress</>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
