import { BiLogOut } from "react-icons/bi";
import Flex from "../chakraUi/Flex";
import useUser from "../../hooks/useUser";
import Text from "../chakraUi/Text";

function Logout() {
  const { clearUser } = useUser();
  const logoutHandler = () => {
    clearUser();
  };
  return (
    <Flex gap="10px" onClick={logoutHandler} cursor="pointer" alignItems="center">
      <BiLogOut />
      <Text>Logout</Text>
    </Flex>
  );
}

export default Logout;
