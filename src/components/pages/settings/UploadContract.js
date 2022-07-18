import Upload from "../../commom/upload/Upload";
import config from "../../../config/appConfig";
import { useQuery } from "react-query";
import { queryKeys } from "../../../reactQuery/queryConstants";
import { generalGetCall } from "./../../../lib/fetchServer";
import useUser from "./../../../hooks/useUser";

function UploadContract() {
  const { user } = useUser();

  const { data: fileData } = useQuery(
    [queryKeys.user, queryKeys.files],
    ({ signal }) => {
      return generalGetCall(`${config.BASE_URL}/upload`, user.token);
    },
    {
      initialData: user.files,
    }
  );

  const dragRejectMessage =
    "Please select one archive at time with the extension .docx or .pdf";

  const fileUploadUrl = `${config.BASE_URL}/upload/contract`;

  const acceptedFiles = {
    "application/pdf": [".pdf"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
  };

  const contractData = fileData.filter((data) => data.type === "contract");

  return (
    <Upload
      type="contract"
      dragRejectMessage={dragRejectMessage}
      fileData={contractData[0]}
      fileUploadUrl={fileUploadUrl}
      acceptedFiles={acceptedFiles}
      variant="dragBox"
    />
  );
}

export default UploadContract;
