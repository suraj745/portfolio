import {
  HStack,
  Heading,
  Center,
  useMediaQuery,
  useBoolean,
  Box,
} from "@chakra-ui/react";
import DeskMenu from "./DeskMenu";
import Link from "next/link";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import MobMenu from "./MobMenu";
import { useEffect } from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import jelly from "../animate/jelly";
const Navbar = () => {
  // mediaQuery
  const [mobile] = useMediaQuery("(max-width:600px)");

  //   useBoolean
  const [cross, setCross] = useBoolean(false);

  useEffect(() => {
    cross ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  }, [cross]);
  return (
    <>
      <HStack
        background={"extraDark"}
        alignItems={"center"}
        height={"6rem"}
        justifyContent={"space-between"}
        padding="2rem"
        zIndex={10000}
        position={"relative"}
      >
        {/* logo */}
        <Center padding={"2rem"}>
          <Link href={"/"} passHref>
            <motion.div whileHover={jelly} whileTap={jelly}>
              <Heading
                onClick={setCross.off}
                fontSize={"3rem"}
                position={"relative"}
                color={"red"}
                _after={{
                  content: `"S"`,
                  position: "absolute",
                  left: "-0.3rem",
                  color: "teal",
                }}
              >
                S
              </Heading>
            </motion.div>
          </Link>
        </Center>
        {mobile ? (
          <>
            <AnimatePresence>
              {cross ? (
                <Box>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "tween", duration: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                    <MobMenu closeNav={setCross.toggle} />
                  </motion.div>
                  <ImCross
                    fontSize={"2rem"}
                    onClick={setCross.toggle}
                    color="white"
                  />
                </Box>
              ) : (
                <GiHamburgerMenu
                  fontSize={"2rem"}
                  onClick={setCross.toggle}
                  color={"white"}
                />
              )}
            </AnimatePresence>
          </>
        ) : (
          <DeskMenu />
        )}
      </HStack>
    </>
  );
};

export default Navbar;
