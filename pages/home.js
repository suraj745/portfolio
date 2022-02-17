import { Stack, Heading, HStack, Box, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
const text1 = `Hello,`;
const text2 = `I'm  SurajArya`;
const text3 = "Web Developer";
import jelly from "../animate/jelly";
import { AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Stack
        background={"dark"}
        minHeight={"calc(100vh - 6rem )"}
        textColor={"white"}
        justifyContent={"center"}
        padding={[
          "0rem 1rem 0rem 1rem",
          "0rem 0rem 0rem 2rem",
          "0rem 0rem 0rem 3rem",
        ]}
      >
        <Box
        //  marginLeft={["1.2rem", "0rem", "1rem", "6rem"]}
        >
          <HStack>
            {text1.split("").map((value, key) => {
              return (
                <motion.div key={key} whileHover={jelly} whileTap={jelly}>
                  <Heading fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}>
                    {value}
                  </Heading>
                </motion.div>
              );
            })}
          </HStack>

          <HStack>
            {text2.split("").map((value, key) => {
              if (value === "S" || value === "A") {
                return (
                  <motion.div key={key} whileHover={jelly} whileTap={jelly}>
                    <Heading
                      position={"relative"}
                      color="red"
                      _after={{
                        content: value === "S" ? `"S"` : `"A"`,
                        position: "absolute",
                        left: "-0.3rem",
                        color: "teal",
                      }}
                      fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
                    >
                      {value}
                    </Heading>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div key={key} whileHover={jelly} whileTap={jelly}>
                    <Heading fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}>
                      {value}
                    </Heading>
                  </motion.div>
                );
              }
            })}
          </HStack>

          <HStack>
            {text3.split("").map((value, key) => {
              return (
                <motion.div key={key} whileHover={jelly} whileTap={jelly}>
                  <Heading fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}>
                    {value}
                  </Heading>
                </motion.div>
              );
            })}
          </HStack>

          <Link href={"/contact"} passHref>
            <Button
              width={"10rem"}
              height={"3rem"}
              borderColor={"teal"}
              background={"transparent"}
              variant={"outline"}
              color={"teal"}
              marginTop={"2rem"}
              rightIcon={<AiOutlinePhone fontSize={"1.5rem"} />}
              _hover={{ bg: "teal", color: "dark" }}
            >
              Contact Me
            </Button>
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
