import {
  Stack,
  Heading,
  HStack,
  Box,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import jelly from "../../animate/jelly";
import Sphere from "../../components/Sphere";
const heading = `Me, Myself & I`;
const About = () => {
  // mediaQuery

  return (
    <>
      <HStack
        minHeight={"calc(100vh - 6rem)"}
        textColor={"white"}
        background={"dark"}
        alignItems={"center"}
        justifyContent={["normal", "normal", "space-between"]}
        flexDirection={["column", "column", "column", "row"]}
        padding={[
          "2rem 1rem 0rem 1rem",
          "2rem 0rem 0rem 2rem",
          "2rem 0rem 0rem 3rem",
        ]}
      >
        <Box
          // margin={["0rem", "0rem", "0rem", '"3rem 0rem 0rem 3rem"']}
          width={{ base: "100%", md: "100%", lg: "50%" }}
        >
          <HStack data-aos="fade-right">
            {heading.split("").map((value, key) => {
              return (
                <motion.div key={key} whileHover={jelly} whileTap={jelly}>
                  <Heading
                    fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
                    color={"teal"}
                  >
                    {value}
                  </Heading>
                </motion.div>
              );
            })}
          </HStack>
          <Text fontSize={["1rem", "1.2rem", "1.3rem"]}>
            <br />
            I’m a web developer. I spend my whole day, practically every day,
            experimenting with HTML, CSS, and JavaScript <br />
            <br />
            I’m curious, and I enjoy work that challenges me to learn something
            new and stretch in a different direction. I do my best to stay on
            top of changes in the state of the art so that I can meet challenges
            with tools well suited to the job at hand
          </Text>
        </Box>

        <Sphere />
      </HStack>
    </>
  );
};

export default About;
