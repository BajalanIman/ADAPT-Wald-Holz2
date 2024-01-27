import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import example1 from "./../../assets/example1.jpg";
import Footer from "./Footer";

import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const example = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className=" w-full ml-24 pr-24 mb-8">
      <Link to="/">
        <img src={adapt} alt="adapt" className="w-80" />
      </Link>
      <Box>
        <Typography variant="h2" sx={{ marginY: 10, fontWeight: "bold" }}>
          Das Waldlabor Oberrhein
        </Typography>
        <img src={example1} alt="example1" className="max-h-[500px] w-full" />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
          nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
          interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper sit. Donec ultrices tincidunt
          arcu non sodales neque sodales. Vel pretium lectus quam id leo in.
          Porttitor rhoncus dolor purus non enim praesent elementum. Sodales
          neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Sed ullamcorper morbi tincidunt ornare. Neque sodales ut etiam
          sit amet nisl purus in. Cursus in hac habitasse platea. Suspendisse
          faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Nunc
          mi ipsum faucibus vitae aliquet nec ullamcorper sit. Donec ultrices
          tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id
          leo in. Porttitor rhoncus dolor purus non enim praesent elementum.
          Sodales neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis.
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
          nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
          interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper sit. Donec ultrices tincidunt
          arcu non sodales neque sodales. Vel pretium lectus quam id leo in.
          Porttitor rhoncus dolor purus non enim praesent elementum. Sodales
          neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis.
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
          nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
          interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper sit. Donec ultrices tincidunt
          arcu non sodales neque sodales. Vel pretium lectus quam id leo in.
          Porttitor rhoncus dolor purus non enim praesent elementum. Sodales
          neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Sed ullamcorper morbi tincidunt ornare. Neque sodales ut etiam
          sit amet nisl purus in. Cursus in hac habitasse platea. Suspendisse
          faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Nunc
          mi ipsum faucibus vitae aliquet nec ullamcorper sit. Donec ultrices
          tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id
          leo in. Porttitor rhoncus dolor purus non enim praesent elementum.
          Sodales neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis.
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
          nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
          interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper sit. Donec ultrices tincidunt
          arcu non sodales neque sodales. Vel pretium lectus quam id leo in.
          Porttitor rhoncus dolor purus non enim praesent elementum. Sodales
          neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis.
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
          nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
          interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper sit. Donec ultrices tincidunt
          arcu non sodales neque sodales. Vel pretium lectus quam id leo in.
          Porttitor rhoncus dolor purus non enim praesent elementum. Sodales
          neque sodales ut etiam sit. Semper eget duis at tellus at urna
          condimentum mattis.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ marginY: 3, fontWeight: "bold" }}>
          Semper eget duis at tellus
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
        >
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
            nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
            interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper sit. Donec ultrices
            tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id
            leo in. Porttitor rhoncus dolor purus non enim praesent elementum.
            Sodales neque sodales ut etiam sit. Semper eget duis at tellus at
            urna condimentum mattis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare. Neque
            sodales ut etiam sit amet nisl purus in. Cursus in hac habitasse
            platea. Suspendisse faucibus interdum posuere lorem ipsum dolor sit
            amet consectetur. Nunc mi ipsum faucibus vitae aliquet nec
            ullamcorper sit. Donec ultrices tincidunt arcu non sodales neque
            sodales. Vel pretium lectus quam id leo in. Porttitor rhoncus dolor
            purus non enim praesent elementum. Sodales neque sodales ut etiam
            sit. Semper eget duis at tellus at urna condimentum mattis.
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
            nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
            interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper sit. Donec ultrices
            tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id
            leo in. Porttitor rhoncus dolor purus non enim praesent elementum.
            Sodales neque sodales ut etiam sit. Semper eget duis at tellus at
            urna condimentum mattis.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ marginY: 3, fontWeight: "bold" }}>
          Semper eget duis at tellus
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
        >
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
            nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
            interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper sit. Donec ultrices
            tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id
            leo in. Porttitor rhoncus dolor purus non enim praesent elementum.
            Sodales neque sodales ut etiam sit. Semper eget duis at tellus at
            urna condimentum mattis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare. Neque
            sodales ut etiam sit amet nisl purus in. Cursus in hac habitasse
            platea. Suspendisse faucibus interdum posuere lorem ipsum dolor sit
            amet consectetur. Nunc mi ipsum faucibus vitae aliquet nec
            ullamcorper sit. Donec ultrices tincidunt arcu non sodales neque
            sodales. Vel pretium lectus quam id leo in. Porttitor rhoncus dolor
            purus non enim praesent elementum. Sodales neque sodales ut etiam
            sit. Semper eget duis at tellus at urna condimentum mattis.
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit amet
            nisl purus in. Cursus in hac habitasse platea. Suspendisse faucibus
            interdum posuere lorem ipsum dolor sit amet consectetur. Nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper sit. Donec ultrices
            tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id
            leo in. Porttitor rhoncus dolor purus non enim praesent elementum.
            Sodales neque sodales ut etiam sit. Semper eget duis at tellus at
            urna condimentum mattis.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default example;
