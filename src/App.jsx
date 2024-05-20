import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blocks from "./Pages/blocks/Blocks";
import Root from "./Pages/Root";
import PageOne from "./Pages/blocks/PageOne";
import PageTwo from "./Pages/blocks/PageTwo";
import PageThree from "./Pages/blocks/PageThree";
import PageFour from "./Pages/blocks/PageFour";
import PageFive from "./Pages/blocks/PageFive";
import PageSix from "./Pages/blocks/PageSix";
import PageSeven from "./Pages/blocks/PageSeven";
import PageEight from "./Pages/blocks/PageEight";
import Imprint from "./Pages/blocks/Imprint";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Blocks /> },
      { path: "/pageone", element: <PageOne /> },
      { path: "/pagetwo", element: <PageTwo /> },
      { path: "/pagethree", element: <PageThree /> },
      { path: "/pagefour", element: <PageFour /> },
      { path: "/pagefive", element: <PageFive /> },
      { path: "/pagesix", element: <PageSix /> },
      { path: "/pageseven", element: <PageSeven /> },
      { path: "/pageeight", element: <PageEight /> },
      { path: "/imprint", element: <Imprint /> },
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
