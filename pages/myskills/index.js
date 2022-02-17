import { HStack, Heading, Box, Text, Progress, VStack } from "@chakra-ui/react";
import jelly from "../../animate/jelly";
import { motion } from "framer-motion";

const heading = `MySkills`;
const MySkills = () => {
  return (
    <HStack
      minHeight={"calc(100vh - 6rem)"}
      textColor={"white"}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      background={"dark"}
      padding={[
        "2rem 1rem 0rem 1rem",
        "2rem 0rem 0rem 2rem",
        "2rem 0rem 0rem 3rem",
      ]}
    >
      <Box width={{ base: "100%", md: "100%", lg: "50%" }}>
        <HStack>
          {heading.split("").map((value, key) => {
            return (
              <motion.div whileHover={jelly} whileTap={jelly} key={key}>
                <Heading
                  data-aos="fade-up"
                  fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
                  color={"teal"}
                  wordBreak={"break-word"}
                >
                  {value}
                </Heading>
              </motion.div>
            );
          })}
        </HStack>
        <Text fontSize={["1rem", "1.2rem", "1.3rem"]}>
          <br />
          Since beginning my journey as a developer nearly 1 years ago , I
          create successful responsive websites that are fast, easy to use, and
          built with best practices.
          <br />
          <br />
          The main area of my expertise is front-end development, HTML, CSS, JS,
          building small and medium web apps, custom plugins, features,
          animations, and coding interactive layouts.
          <br />
          <br />
          I`m also practising on full-stack
        </Text>
      </Box>

      <VStack
        data-aos="zoom-in"
        gap={"1rem"}
        width={{ base: "100%", md: "100%", lg: "40%" }}
        padding={{ lg: "4rem 0rem 0rem 3rem" }}
      >
        <Box width={"100%"} marginTop={["2rem", "2rem", "0rem"]}>
          <Text fontSize={["1rem", "1.2rem", "1.3rem"]}>Front-end</Text>
          <Progress value={90} size="xs" />
        </Box>
        <Box width={"100%"}>
          <Text fontSize={["1rem", "1.2rem", "1.3rem"]}>Back-end</Text>
          <Progress value={65} size="xs" colorScheme={"pink"} />
        </Box>
        <Box width={"100%"}>
          <Text fontSize={["1rem", "1.2rem", "1.3rem"]}>Next-Js</Text>
          <Progress value={60} size="xs" colorScheme={"purple"} />
        </Box>
      </VStack>
    </HStack>
  );
};

export default MySkills;
