import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Trains from "./Pages/Trains";
import Train from "./Pages/Train";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Trains />,
    },
    {
      path: "/train",
      element: <Train/>,
    },
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
