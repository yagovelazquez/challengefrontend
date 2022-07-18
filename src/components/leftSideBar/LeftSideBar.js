import Flex from "../chakraUi/Flex";
import { Image, VStack } from "@chakra-ui/react";
import Button from "../chakraUi/Button";
import { VscGraphLine } from "react-icons/vsc";
import { GiAlarmClock } from "react-icons/gi";
import { BsFillPersonFill, BsCashCoin, BsGear } from "react-icons/bs";
import IconTexts from "./IconTexts";
import { useDisclosure } from "@chakra-ui/react";
import AddUserDrawer from "./AddUserDrawer";

function LeftSideBar() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const icontTextsContents = [
    {
      Icon: BsGear,
      label: "Settings",
      link: "settings",
    },
    {
      Icon: VscGraphLine,
      label: "Reports",
      link: "reports",
    },
    {
      Icon: GiAlarmClock,
      label: "Time Clock",
      link: "time-clock",
    },
    {
      Icon: BsFillPersonFill,
      label: "Employees",
      link: "employees",
    },
    {
      Icon: BsCashCoin,
      label: "Finances",
      link: "finances",
    },
  ];

  return (
    <>
      {" "}
      <Flex
        flexDir="column"
        alignItems="center"
        padding="15px"
        position="fixed"
        left="0"
        top="0"
        width="250px"
        height="100vh"
        bg="#e4ebf5"
      >
        <Image height="40px" width="200px" src="logoChallenge.png"></Image>
        <Button onClick={onOpen} margin="50px 0" fontSize="0.75rem">
          ADD EMPLOYEE
        </Button>

        <VStack marginLeft="35px" width="100%" gap="15px" align="flex-start">
          {icontTextsContents.map((content) => (
            <IconTexts key={content.label} {...content} />
          ))}
        </VStack>
      </Flex>
      <AddUserDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default LeftSideBar;
