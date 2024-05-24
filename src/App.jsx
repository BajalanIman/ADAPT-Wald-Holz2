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
import { Box } from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          height: "full",
          width: "full",
          justifyContent: "center",
          bgcolor: "#ededed",
        }}
        // className="flex h-full w-full justify-center bg-gray-400"
      >
        <div className="flex h-full max-w-[1920px] bg-white">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </Box>
    </>
  );
}

export default App;
