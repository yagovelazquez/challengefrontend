import Flex from "../chakraUi/Flex";
import { BsGear } from "react-icons/bs";
import Box from "../chakraUi/Box";
import Avatar from "../chakraUi/Avatar";
import useUser from "../../hooks/useUser";
import Text from "../chakraUi/Text";
import { useNavigate } from "react-router-dom";
import Popover from "./../commom/Popover";
import Logout from "./Logout";
import useFiles from "./../../hooks/useFiles";
import config from "../../config/appConfig";

function Header() {
  const { user } = useUser();
  const { avatarData } = useFiles();
  const navigate = useNavigate();

  const gearClickHandler = () => {
    navigate("../settings");
  };

  const hoverProps = {
    background: "#e4ebf5",
  };

  const PopOverTrigger = () => {
    return (
      <Flex
        cursor="pointer"
        justify="center"
        alignItems="center"
        height="100%"
        _hover={hoverProps}
      >
        <Avatar
          marginRight="15px"
          size="sm"
          src={
            avatarData[0] ? `${config.BASE_URL}/${avatarData[0]?.url}` : null
          }
        />
        <Flex marginRight="3px" justify="flex-start" flexDir="column">
          <Text textTransform="capitalize" fontWeight="500" fontSize=".9rem">
            {user.name.toLowerCase()}
          </Text>
          <Text textTransform="capitalize" fontWeight="500" fontSize=".75rem">
            {user.occupation.toLowerCase()}
          </Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex
      cursor="pointer"
      padding="0 30px"
      alignItems="center"
      marginLeft="250px"
      height="57px"
      justify="flex-end"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        _hover={hoverProps}
        height="100%"
        padding="0 10px"
        onClick={gearClickHandler}
      >
        <Box size="1.2rem" as={BsGear} />
      </Flex>
      <Popover PopoverTrigger={PopOverTrigger}>
        <Logout />
      </Popover>
    </Flex>
  );
}

export default Header;
