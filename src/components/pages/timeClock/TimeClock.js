import Flex from "../../chakraUi/Flex";
import Clock from "./Clock";
import moment from "moment";
import Text from "../../chakraUi/Text";
import Button from "../../chakraUi/Button";
import DefaultPageContainer from "./../../commom/DefaultPageContainer";
import TextLine from "../../commom/TextLine";
import { useDisclosure } from "@chakra-ui/react";
import TimeClockModal from "./TimeClockModal";
import TimeClockTable from "./TimeClockTable";

function TimeClock() {
  const calendarDate = moment().format("dddd MMMM Do YYYY");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DefaultPageContainer label="Hour">
      <TimeClockModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Flex
        width="100%"
        alignItems="center"
        gap="10px"
        height="100%"
        flexDir="column"
        padding="50px 0"
      >
        <Clock />
        <Text fontSize="1rem" letterSpacing="0.05rem">
          {calendarDate}
        </Text>
        <Button onClick={onOpen} height="60px" width="200px">
          Register time
        </Button>
      </Flex>
      <TextLine label="Last Registered Times" />
      <TimeClockTable />
    </DefaultPageContainer>
  );
}

export default TimeClock;
