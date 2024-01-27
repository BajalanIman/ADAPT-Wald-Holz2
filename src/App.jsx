import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blocks from "./Pages/blocks/Blocks";
import Root from "./Pages/Root";
import Example from "./Pages/blocks/Example";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Blocks /> },
      { path: "/example", element: <Example /> },
      // { path: "/panoramas", element: <Panoramas /> },
      // { path: "/openweather", element: <Openweather /> },
      // { path: "/login", element: <Login /> },
      // { path: "/newuser", element: <NewUsers /> },
      // { path: "/stationsadmin", element: <StationsAdmin /> },
      // { path: "/usermanagement", element: <UserManagement /> },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="flex w-full h-full">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
