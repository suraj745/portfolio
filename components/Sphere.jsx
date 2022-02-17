import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { v4 } from "uuid";
import { Center } from "@chakra-ui/react";

import {
  siJavascript,
  siMongodb,
  siAdobephotoshop,
  siExpress,
  siNextdotjs,
  siChakraui,
  siTailwindcss,
  siAdobeillustrator,
  siSass,
  siNodedotjs,
  siHtml5,
  siCss3,
  siFramer,
  siGit,
} from "simple-icons/icons";
const icons = [
  siAdobephotoshop,
  siNodedotjs,
  siExpress,
  siNextdotjs,
  siChakraui,
  siTailwindcss,
  siAdobeillustrator,
  siMongodb,
  siJavascript,
  siSass,
  siHtml5,
  siCss3,
  siFramer,
  siGit,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 100,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

const Sphere = () => {
  return (
    <Center
      data-aos="fade-down"
      width={{ base: "100%", md: "100%", lg: "50%" }}
      marginTop={{ base: "3rem", md: "3rem", lg: "0rem" }}
    >
      <Cloud key={v4()} id={"icons"}>
        {icons}
      </Cloud>
    </Center>
  );
};

export default Sphere;
