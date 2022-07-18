import { Modal, ModalOverlay, ModalContent, Spinner } from "@chakra-ui/react";
import React from "react";

function LoadingModal(props) {
  const { isLoading } = props;

  return (
    <Modal preserveScrollBarGap blockScrollOnMount isOpen={isLoading}>
      <ModalOverlay bg="whiteAlpha.800" />
      <ModalContent
        height="100%"
        margin="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="transparent"
        boxShadow="none"
      >
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </ModalContent>
    </Modal>
  );
}

export default LoadingModal;
