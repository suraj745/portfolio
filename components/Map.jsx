import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";

const Map = () => {
  return (
    <Box
      data-aos="fade-down"
      width={{ base: "100%", md: "45%", lg: "50%" }}
      padding={{ base: "1rem 0rem 1rem 0rem" }}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        height="8rem"
        background={"black"}
        top={"6"}
        left={"2.5"}
        padding={"1rem"}
      >
        <Box>
          <Flex as="a" href="https://www.linkedin.com/in/suraj-arya-9a6971199/">
            <Box color={"teal"}>
              <BsLinkedin fontSize="1.2rem" />
            </Box>
            :<Box as="span"> Suraj Arya</Box>
          </Flex>
          <br />
          <Flex
            alignItems={"center"}
            as="a"
            href="https://mail.google.com/mail/u/0/#sent?compose=new"
          >
            <Box as="p" color={"teal"} fontSize={"1.2rem"}>
              @:
            </Box>
            surajarya745@gmail.com
          </Flex>
        </Box>
      </Box>

      <iframe
        src="https://api.maptiler.com/maps/basic/?key=JRxt1LtK48oxGSQf9DhU#4.4/18.8039228/73.2920411"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </Box>
  );
};

export default Map;
