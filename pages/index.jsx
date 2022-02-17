import { Box } from "@chakra-ui/react";
import Home from "./home";
import About from "./about";
import MySkills from "./myskills";
import Work from "./work/work";
import Contact from "./contact";
const index = () => {
  return (
    <Box
      padding={[
        "0rem 1rem 0rem 1rem",
        "0rem 2rem 0rem 2rem",
        "0rem 2rem 0rem 2rem",
      ]}
      background={"dark"}
    >
      <Home />
      <About />
      <MySkills />
      <Work />
      <Contact />
    </Box>
  );
};

export default index;
