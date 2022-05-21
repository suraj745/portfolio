import {
  ChakraProvider,
  extendTheme,
  Stack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import "@fontsource/libre-franklin/700.css";
import "@fontsource/open-sans";
import Particle from "../components/Particle";
import Layout from "../layout/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useRouter, Router } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
const theme = extendTheme({
  fonts: {
    heading: "libre franklin",
    body: "open sans",
  },

  colors: {
    teal: "#05fdd8",
    red: "#fd2155",
    dark: "#1d1d1d",
    extraDark: "#181818",
    lightDark: "#2b2b2b",
  },
});
const App = ({ Component, pageProps }) => {
  // useState
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // window.onload(()=>{setLoading(false)};

  const router = useRouter();

  Router.events.on("routeChangeComplete", () => {
    setLoading(true);
  });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {loading ? (
          <Center minHeight={"calc(100vh - 6rem)"}>
            <motion.div
              display={"inline-block"}
              animate={{
                y: [0, -20, 0, -20, 0, -20, 0, -20, 0],
                transition: {
                  duration: "1",
                  repeat: "Infinity",
                  repeatType: "mirror",
                },
              }}
            >
              <Image
                src={"/fav.png"}
                width={"50"}
                objectFit={"contain"}
                alt={"loading"}
                height={"50"}
              />
            </motion.div>
          </Center>
        ) : (
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <Particle />
            <Component {...pageProps} />
          </motion.div>
        )}
      </Layout>
    </ChakraProvider>
  );
};

export default App;
