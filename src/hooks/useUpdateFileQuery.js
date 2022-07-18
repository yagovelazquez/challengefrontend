import { queryKeys } from "../reactQuery/queryConstants";
import useUser from "./useUser";
import { useQueryClient, useMutation } from "react-query";
import { uploadPostCall } from "../lib/fetchServer";

function useUpdateFileQuery({type,fileUploadUrl, onFileUploaded}) {
  const queryClient = useQueryClient();
  const {updateStoragedUser, user} = useUser()

  const updateFileQuery = (fileData, type) => {
    queryClient.setQueryData([queryKeys.user, queryKeys.files], (oldValue) => {
      const contractData = oldValue.filter((data) => data.type !== type);
      if (fileData) {
        contractData.push(fileData);
      }
      updateStoragedUser({files: contractData},true)
      return contractData;
    });
  };

  const { mutate: mutateUpdateFile } = useMutation(
    (values) => {
      return uploadPostCall(values, fileUploadUrl, user.token);
    },
    {
      onSuccess: (values, variables) => {
        const { action } = variables;

        if (action === "POST") {
          onFileUploaded((oldValue) => {
            return { ...oldValue, uploaded: true };
          });
          updateFileQuery(values, type);
        }
        if (action === "DELETE") {
          onFileUploaded({});
          updateFileQuery(null, type);
        }
      },
      onError: () => {
        onFileUploaded((oldValue) => {
          return { ...oldValue, error: true, uploaded: false };
        });
      },
      mutationKey: "uploadFile",
    }
  );

  return { updateFileQuery, mutateUpdateFile };
}

export default useUpdateFileQuery;
