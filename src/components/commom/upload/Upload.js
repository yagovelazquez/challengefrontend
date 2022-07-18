import Dropzone from "react-dropzone";
import FileList from "./FileList";
import { useState, useEffect } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";
import Flex from "../../chakraUi/Flex";
import useUpdateFileQuery from "../../../hooks/useUpdateFileQuery";
import UploadBox from "./UploadBox";
import UploadAvatar from "./UploadAvatar";


function Upload(props) {
  const [fileUploaded, setFileUploaded] = useState({});

  const {
    dragRejectMessage,
    avatarProps,
    fileUploadUrl,
    acceptedFiles,
    fileData,
    type,
    variant,
  } = props;
  const { mutateUpdateFile } = useUpdateFileQuery({
    fileUploadUrl,
    type,
    onFileUploaded: setFileUploaded,
  });

  useEffect(() => {
    if (fileData) {
      setFileUploaded((oldValue) => {
        return {
          ...oldValue,
          key: fileData.key,
          name: fileData.name,
          readableSize: filesize(fileData.size),
          url: fileData.url,
          error: false,
          uploaded: true,
        };
      });
    }
  }, [fileData]);

  const uploadServerMutate = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    mutateUpdateFile({ reqBodyData: formData, action: "POST" });
  };

  const uploadHandler = (file) => {
    setFileUploaded({
      file: file[0],
      id: uniqueId(),
      name: file[0].name,
      uploaded: false,
      readableSize: filesize(file[0].size),
      preview: URL.createObjectURL(file[0]),
      error: false,
      url: null,
    });

    uploadServerMutate(file[0]);
  };

  const deleteHandler = () => {
    setFileUploaded((oldValue) => {
      return { ...oldValue, error: false, uploaded: false };
    });
    mutateUpdateFile({ action: "DELETE" });
  };

  return (
    <Flex height="100%" flexDir="column" width="100%">
      <Dropzone
        multiple={false}
        onDropAccepted={uploadHandler}
        accept={acceptedFiles}
        styles={{width: "100%"}}
      >
        {({ getInputProps, getRootProps, isDragAccept, isDragReject }) => {
          if (variant === "dragBox")
            return (
              <UploadBox
                dragRejectMessage={dragRejectMessage}
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                isDragAccept={isDragAccept}
                isDragReject={isDragReject}
              />
            );
          if (variant === "avatar")
            return (
              <UploadAvatar
                dragRejectMessage={dragRejectMessage}
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                isDragAccept={isDragAccept}
                avatarProps={avatarProps}
                isDragReject={isDragReject}
                avatarUrlPreview={fileUploaded.preview}
                avatarUrl={fileUploaded.url}
              />
            );
        }}
      </Dropzone>
      {Object.keys(fileUploaded).length !== 0 && variant === "dragBox" && (
        <FileList onDelete={deleteHandler} fileUploaded={fileUploaded} />
      )}
    </Flex>
  );
}

export default Upload;
