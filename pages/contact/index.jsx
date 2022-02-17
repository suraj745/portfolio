import { Box, Stack, HStack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import jelly from "../../animate/jelly";
import Form from "../../components/Form";
const heading = "Contact";
import Map from "../../components/Map";

const Contact = () => {
  return (
    <>
      <Stack
        textColor={"white"}
        background={"dark"}
        minHeight={"calc(100vh - 6rem)"}
        padding={[
          "2rem 1rem 1rem 1rem",
          "2rem 0rem 1rem 2rem",
          "2rem 0rem 1rem 3rem",
        ]}
      >
        <Box>
          <HStack data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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
          <br />

          <Text fontSize={["1rem", "1.2rem", "1.3rem"]}>
            I`m interested in Job and Internship opportunities especially
            ambitious or large projects.
          </Text>

          <br />
          <br />
          <HStack
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Form />
            <Map />
          </HStack>
        </Box>
      </Stack>
    </>
  );
};

export default Contact;
