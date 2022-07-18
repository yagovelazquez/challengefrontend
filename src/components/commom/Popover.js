import {
  Popover as ChakraPopover,
  PopoverArrow,
  PopoverTrigger as PopoverTriggerChakra,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
function Popover(props) {
  const { children, PopoverTrigger } = props;

  return (
    <ChakraPopover>
      <PopoverTriggerChakra>
        <Box height="100%">
          <PopoverTrigger>
            <Text>Trigger</Text>
          </PopoverTrigger>
        </Box>
      </PopoverTriggerChakra>
      <PopoverContent width="150px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody >{children}</PopoverBody>
      </PopoverContent>
    </ChakraPopover>
  );
}

export default Popover;
