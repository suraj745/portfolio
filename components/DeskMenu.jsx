import { HStack, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import jelly from "../animate/jelly";
const links = ["About", "MySkills", "Contact"];
const DeskMenu = () => {
  return (
    <HStack color={"white"}>
      {links.map((value, key) => {
        return (
          <Link key={key} href={`/${value.toLowerCase()}`} passHref>
            <motion.div whileHover={jelly} whileTap={jelly}>
              <Center padding={"0.8rem 1.2rem"}>{value}</Center>
            </motion.div>
          </Link>
        );
      })}
    </HStack>
  );
};

export default DeskMenu;
