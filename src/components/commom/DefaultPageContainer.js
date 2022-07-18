import Flex from "../chakraUi/Flex";
import Text from "../chakraUi/Text";
import Box from "../chakraUi/Box";

function DefaultPageContainer(props) {
  const { label } = props;
  return (
    <Flex color="#4a5471" margin="20px" flexDir="column">
      <Flex
      border="1px solid #e4ebf5"
        alignItems="center"
        paddingLeft="30px"
        fontWeight="500"
        fontSize="2rem"
        width="100%"
        height="80px"
        bg="#e4ebf5"
      >
        <Text color="#4a5471">{label}</Text>
      </Flex>
      <Box   padding="25px"    border="1px solid #e4ebf5" borderTop="none">
      {props.children}
      </Box>
    </Flex>
  );
}

export default DefaultPageContainer;
