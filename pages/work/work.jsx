import { Heading, Box, HStack, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import jelly from "../../animate/jelly";
import data from "../../db/data";
const heading = "Work";

const Work = () => {
  return (
    <>
      <Box
        data-aos-anchor-placement="center-bottom"
        textColor={"white"}
        background={"dark"}
        minH={"calc(100vh - 6rem)"}
        padding={[
          "2rem 1rem 0rem 1rem",
          "2rem 0rem 0rem 2rem",
          "2rem 0rem 0rem 3rem",
        ]}
      >
        <HStack data-aos="fade-down">
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
          I`m self taught Web Developer innovative and equipped with
          consistency, constantly learning abilites. I have worked on 3 project
          in react they are below
        </Text>

        <br />
        <br />
        <Grid
          spacing={"8rem"}
          rowGap={{ base: "2rem" }}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
          }}
          placeItems={"center"}
        >
          {data.map((value) => {
            return (
              <GridItem
                key={value.key}
                width={{ lg: "20rem", md: "15rem", sm: "20rem" }}
              >
                <Card imgUrl={value.imgUrl} hostUrl={value.hostUrl} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Work;
