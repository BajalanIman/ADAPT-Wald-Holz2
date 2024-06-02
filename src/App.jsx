import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import Blocks from "./Pages/blocks/Blocks";
import Root from "./Pages/Root";
import Projektidee from "./Pages/blocks/Projektidee";
import Module from "./Pages/blocks/Module";
import Waldmanagement from "./Pages/blocks/Waldmanagement";
import Holzbereitstellung from "./Pages/blocks/Holzbereitstellung";
import Holzverwendung from "./Pages/blocks/Holzverwendung";
import InnoForum from "./Pages/blocks/InnoForum";
import Projektkonsortium from "./Pages/blocks/Projektkonsortium";
import Regulus from "./Pages/blocks/Regulus";
import Imprint from "./Pages/blocks/Imprint";
import PopupPoll from "./Pages/blocks/PopupPoll";
import Team from "./Pages/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Blocks /> },
      { path: "/projektidee", element: <Projektidee /> },
      { path: "/module", element: <Module /> },
      { path: "/waldmanagement", element: <Waldmanagement /> },
      { path: "/holzbereitstellung", element: <Holzbereitstellung /> },
      { path: "/holzverwendung", element: <Holzverwendung /> },
      { path: "/innoForum", element: <InnoForum /> },
      { path: "/projektkonsortium", element: <Projektkonsortium /> },
      { path: "/regulus", element: <Regulus /> },
      { path: "/imprint", element: <Imprint /> },
      { path: "/team", element: <Team /> },
    ],
  },
]);

function App() {
  return (
    <>
      <PopupPoll />
      <Box
        sx={{
          display: "flex",
          height: "full",
          width: "full",
          justifyContent: "center",
          bgcolor: "#ededed",
        }}
      >
        <div className="flex h-full max-w-[1920px] bg-white">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </Box>
    </>
  );
}

export default App;
