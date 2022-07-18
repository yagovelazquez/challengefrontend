import { Link } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";
import { IoAttach } from "react-icons/io5";
import { MdCheckCircle, MdError } from "react-icons/md";
import { CircularProgress } from "@chakra-ui/react";
import Flex from "../../chakraUi/Flex";
import Text from "../../chakraUi/Text";
import { HStack } from "@chakra-ui/react";
import config from "../../../config/appConfig";

function FileList({  fileUploaded, onDelete }) {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      marginTop="10px"
      width="300px"
    >
      <Flex maxWidth="235px" flexDir="column">
        {fileUploaded.name && (
          <Text fontWeight="600" color="#8093AC">
            {fileUploaded.name}
          </Text>
        )}
        <HStack>
          {fileUploaded.readableSize && (
            <Text fontSize="0.8rem" color="#8093AC">
              {fileUploaded.readableSize}
            </Text>
          )}
          {fileUploaded.url || (
            <Text
              cursor="pointer"
              onClick={onDelete}
              fontSize="0.8rem"
              color="#e57878"
            >
              Exclude
            </Text>
          )}
        </HStack>
      </Flex>
      {!fileUploaded.uploaded && !fileUploaded.error && (
        <CircularProgress size="35px" color="bgDefault.400" isIndeterminate />
      )}
      {fileUploaded.uploaded && (
        <Flex minWidth="65px" alignItems="center">
          {fileUploaded.url && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`${config.BASE_URL}/${fileUploaded.url}`}
            >
              <IoAttach size="35px"></IoAttach>
            </Link>
          )}
          {!fileUploaded.error && (
            <MdCheckCircle color="#78e5d5" size={30}></MdCheckCircle>
          )}
        </Flex>
      )}
      {fileUploaded.error && <MdError color="#e57878" size={30}></MdError>}
    </Flex>
  );
}

export default FileList;
