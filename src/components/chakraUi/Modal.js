import React from "react";
import Button from "./Button";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Modal(props) {

  const {isOpen, onClose,headerProperties ,headerLabel} = props

  


  return (
    <>
      <ChakraModal
        isOpen={isOpen}
        onClose={onClose}
        preserveScrollBarGap blockScrollOnMount
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader {...headerProperties}>{headerLabel}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center" pb={6}>{props.children}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
}

export default Modal;
