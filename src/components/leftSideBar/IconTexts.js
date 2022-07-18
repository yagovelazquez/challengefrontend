import Box from "../chakraUi/Box";
import Flex from "../chakraUi/Flex";
import Text from "../chakraUi/Text";
import { useNavigate } from "react-router-dom";

function IconTexts(props) {
  const { Icon, label, link } = props;
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`../${link}`);
  };

  return (
    <Flex
      cursor="pointer"
      onClick={clickHandler}
      color="#8093AC"
      _hover={{ color: "#434E6C" }}
      gap="5px"
      align="center"
    >
      <Box as={Icon} />
      <Text>{label}</Text>
    </Flex>
  );
}

export default IconTexts;
