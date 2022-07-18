import { Input, Flex as ChakraFlex } from "@chakra-ui/react";
import { AiOutlineInbox } from "react-icons/ai";
import Text from "../../chakraUi/Text";


function UploadBox({
  getRootProps,
  getInputProps,

  dragRejectMessage,
  isDragAccept,
  isDragReject,
}) {
  let dragBoxProps = {};
  let dragMessageProps = {};
  let dragMessage = "Drag'n drop file here";

  if (isDragAccept) {
    dragBoxProps = {
      borderColor: "#78e5d5",
    };

    dragMessageProps = {
      color: "#78e5d5",
    };

    dragMessage = "Drop file";
  }

  if (isDragReject) {
    dragBoxProps = {
      borderColor: "#e57878",
    };

    dragMessageProps = {
      color: "#e57878",
    };

    dragMessage = dragRejectMessage;
  }

  return (
    <ChakraFlex
      border="1px dashed #ddd"
      borderRadius="4px"
      cursor="pointer"
      transition="height 0.2s ease"
      height="100px"
      justify="center"
      width="300px"
      flexDir="column"
      alignItems="center"
      {...dragBoxProps}
      {...getRootProps()}
    >
      <AiOutlineInbox size="40px" color="#8093AC" {...dragMessageProps} />{" "}
      <Input {...getInputProps()}></Input>
      <Text
        fontSize="0.8rem"
        textAlign="center"
        color="#8093AC"
        {...dragMessageProps}
      >
        {dragMessage}
      </Text>
    </ChakraFlex>
  );
}

export default UploadBox;
