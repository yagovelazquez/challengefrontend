import { Input as ChakraInput } from "@chakra-ui/react";

function Input(props) {
  const { inputProperties, type, field } = props;

  return (
    <ChakraInput
      _focus={{ borderColor: "black", boxShadow: "none" }}
      _invalid={{ borderColor: "#cb2b2b !important" }}
      _hover={{ borderColor: "black" }}
      borderColor="black"
      borderRadius="0px"
      placeholder=" "
      {...field}
      {...inputProperties}
      type={type}
    ></ChakraInput>
  );
}

export default Input;
