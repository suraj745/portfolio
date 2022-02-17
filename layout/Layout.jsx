import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Box as={"main"}>{children}</Box>
    </>
  );
};

export default Layout;
