import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

const Drawer = ({ isOpen, onClose, children, title }) => {
  return (
    <>
      <ChakraDrawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default Drawer;
