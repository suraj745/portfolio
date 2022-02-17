import { VStack, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
const links = ["About", "MySkills", "Contact"];
import { motion, AnimatePresence } from "framer-motion";
import jelly from "../animate/jelly";
const MobMenu = ({ closeNav }) => {
  return (
    <VStack
      color={"white"}
      background={"dark"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      position={"absolute"}
      top={"5rem"}
      left={"0"}
    >
      {links.map((value, key) => {
        return (
          <Link key={key} href={`/${value.toLowerCase()}`} passHref>
            <motion.div whileHover={jelly} whileTap={jelly}>
              <Center padding={"0.8rem 1.2rem"} onClick={closeNav}>
                <Text>{value}</Text>
              </Center>
            </motion.div>
          </Link>
        );
      })}
    </VStack>
  );
};

export default MobMenu;
