import Avatar from "../../chakraUi/Avatar";
import config from "../../../config/appConfig";
import { Box } from "@chakra-ui/react";

function UploadAvatar(props) {
  const { avatarUrl, getRootProps, getInputProps, avatarUrlPreview, avatarProps } = props;
  const avatarFullUrl = avatarUrl ? `${config.BASE_URL}/${avatarUrl}` : null;

  return (
    <Box cursor="pointer" height="100%" width="100%" {...getRootProps()}>
      <Avatar {...getInputProps} {...avatarProps} src={avatarUrlPreview || avatarFullUrl}></Avatar>
    </Box>
  );
}

export default UploadAvatar;
