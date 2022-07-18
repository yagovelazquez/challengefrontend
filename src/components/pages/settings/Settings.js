import DefaultPageContainer from "../../commom/DefaultPageContainer";
import { IoCameraOutline } from "react-icons/io5";
import Box from "../../chakraUi/Box";
import Avatar from "../../chakraUi/Avatar";
import Flex from "../../chakraUi/Flex";
import Text from "../../chakraUi/Text";
import useUser from "../../../hooks/useUser";
import UploadSettingsAvatar from "./UploadSettingsAvatar";
import useFiles from "../../../hooks/useFiles";
import SettingsForm from "./SettingsForm";

function Settings() {
  const { user } = useUser();
  const { avatarData } = useFiles();

  return (
    <DefaultPageContainer label="Settings">
      <Flex paddingBottom="20px" borderBottom="1px solid rgb(221, 229, 238)" alignItems="center">
        <Box
          color="#8093AC"
          border={!avatarData && "1px solid rgb(221, 229, 238)"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          bg="rgb(246, 248, 254)"
          boxSize="60px"
        >
          {avatarData && <UploadSettingsAvatar />}
          {!avatarData && <IoCameraOutline size="25px" />}
        </Box>
        <Text marginLeft="20px" fontSize="1.875rem" textTransform="capitalize">
          {user.name.toLowerCase()}
        </Text>
      </Flex>
      <SettingsForm></SettingsForm>
    </DefaultPageContainer>
  );
}

export default Settings;
