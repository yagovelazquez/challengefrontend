import * as Yup from "yup";
import Form from "../../commom/Form";
import useUser from "../../../hooks/useUser";
import { useQueryClient, useMutation } from "react-query";
import { queryKeys } from "../../../reactQuery/queryConstants";
import config from "../../../config/appConfig";
import UploadContract from "./UploadContract";
import { generalPostCall } from "./../../../lib/fetchServer";

function SettingsForm() {
  const { updateUser, user } = useUser();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (values) => {
      values.token = user.token;
      return generalPostCall(values, `${config.BASE_URL}/user`, "UPDATE");
    },
    {
      onMutate: () => {
        queryClient.cancelQueries(queryKeys.user);
      },
      onSuccess: (data, values) => {
        updateUser(values, true);
      },
    }
  );

  const submitFormHandler = (values) => {
    mutate(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter a valid name"),
    occupation: Yup.string().required("Please enter a valid occupation"),
  });

  const gridProperties = {
    gridTemplateAreas: "'name' 'occupation' 'contract'  'submitButton'",
    alignContent: "start",
    gap: "30px",
    bg: "white",
    width: "400px",
    marginTop: "50px",
    borderRadius: "3px",
  };

  const inputContents = [
    {
      label: "Name",
      name: "name",
      inputType: "input",
      initialValue: user.name,
    },
    {
      label: "Occupation",
      name: "occupation",
      inputType: "input",
      initialValue: user.occupation,
    },
  ];
  const buttonLabel = "SAVE";

  const AnyElements = [
    {
      Element: () => <UploadContract></UploadContract>,
      key: "contract",
    },
  ];

  return (
    <Form
      AnyElements={AnyElements}
      onSubmitForm={submitFormHandler}
      validationSchema={validationSchema}
      buttonLabel={buttonLabel}
      gridProperties={gridProperties}
      inputContents={inputContents}
    />
  );
}

export default SettingsForm;
