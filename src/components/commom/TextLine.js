import Text from "../chakraUi/Text";
import Flex from "../chakraUi/Flex";
import Box from "../chakraUi/Box";

function TextLine(props) {
  const { label } = props;

  const boxProperties = {
    borderBottom: "1px solid #e4ebf5",
    content: "''",
    width: "95%",
  };

  return (
    <Flex
      width="100%"
      alignItems="center"
      _after={{ ...boxProperties }}
      _before={{ ...boxProperties, width: "5%" }}
    >
      <Text margin="0 15px" whiteSpace="nowrap">{label}</Text>
    </Flex>
  );
}

export default TextLine;
