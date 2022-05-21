import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

// https://validate-suraj745.vercel.app

const Card = ({ imgUrl, hostUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    >
      <Box
        overflow={"hidden"}
        position={"relative"}
        filter={"auto"}
        brightness={"50%"}
        _hover={{
          brightness: "100%",
        }}
      >
        <Box as={"a"} href={hostUrl}>
          <Image
            src={imgUrl}
            width={"336"}
            height={"400"}
            alt={"project"}
            objectFit={"cover"}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Card;
