import Flex from "../../chakraUi/Flex";
import Box from "../../chakraUi/Box";
import { Image, Text } from "@chakra-ui/react";
import { AiFillLock } from "react-icons/ai";

function HeaderFormElement(props) {
  const { headerFormElementTitle, headerFormElementSubTitle } = props;
  

  return (
    <Flex
      gridArea="titleHeader"
      alignItems="center"
      bg="white"
      flexDir="column"
    >
      <Image height="60px" width="240px" src="logoChallenge.png"></Image>
      <Text marginTop="5px" variant="formTitle">
        {headerFormElementTitle}
      </Text>
      <Text marginTop="5px" variant="formSubtitle">
        {headerFormElementSubTitle}
      </Text>
      <Flex
        alignItems="center"
        padding="0 3px"
        width="100%"
        color="rgba(0, 0, 0, 0.5)"
        marginTop="20px"
      >
        <Box height="2px" bg="rgba(0,0,0,0.2)" width="100%"></Box>
        <Box padding="0 2px">
          <AiFillLock />
        </Box>
        <Box height="2px" bg="rgba(0,0,0,0.2)" width="100%"></Box>
      </Flex>
    </Flex>
  );
}

export default HeaderFormElement;
