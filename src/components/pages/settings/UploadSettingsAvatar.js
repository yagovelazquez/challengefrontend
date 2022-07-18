import Upload from "../../commom/upload/Upload";
import config from "../../../config/appConfig";
import useUser from "../../../hooks/useUser";
import useFiles from "./../../../hooks/useFiles";

function UploadSettingsAvatar() {
  const { avatarData } = useFiles();

  const fileUploadUrl = `${config.BASE_URL}/upload/avatar`;

  const acceptedFiles = {
    "image/jpeg": [".jpeg"],
    "image/pjepg": [".pjepg"],
    "image/png": [".png"],
    "image/jpg": [".jpg"],
  };

  const avatarProps = {
    width: "60px",
    height: "60px",
  };

  return (
    <Upload
      type="avatar"
      fileData={avatarData[0]}
      fileUploadUrl={fileUploadUrl}
      acceptedFiles={acceptedFiles}
      variant="avatar"
      avatarProps={avatarProps}
    />
  );
}

export default UploadSettingsAvatar;
