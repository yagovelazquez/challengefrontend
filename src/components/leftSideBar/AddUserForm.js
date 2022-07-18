import * as Yup from "yup";
import { useQueryClient, useMutation } from "react-query";
import { queryKeys } from "../../reactQuery/queryConstants";
import Form from "../commom/Form";
import config from "../../config/appConfig";
import { generalPostCall } from "./../../lib/fetchServer";
import useUser from "./../../hooks/useUser";

function AddUserForm() {
  const { updateUser, user } = useUser();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (values) => {
      values.token = user.token;
      return generalPostCall(values, `${config.BASE_URL}/user`);
    },
    {
      onMutate: () => {
        queryClient.cancelQueries(queryKeys.user);
      },
      onSuccess: (data, values) => {},
    }
  );

  const submitFormHandler = (values) => {
    mutate(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter a valid name"),
    occupation: Yup.string().required("Please enter a valid occupation"),
    hourRate: Yup.number("Please enter a valid hour rate").required("Please enter a valid hour rate"),
  });

  const gridProperties = {
    gridTemplateAreas: "'name' 'occupation' 'hourRate' 'submitButton'",
    alignContent: "start",
    gap: "30px",
    bg: "white",
    borderRadius: "3px",
  };

  const inputContents = [
    {
      label: "Name",
      name: "name",
      inputType: "input",
    },
    {
      label: "Occupation",
      name: "occupation",
      inputType: "input",
    },
    {
      label: "Hour Rate",
      name: "hourRate",
      inputType: "input",
    },
  ];
  const buttonLabel = "ADD EMPLOYEE";



  return (
    <Form
      onSubmitForm={submitFormHandler}
      validationSchema={validationSchema}
      buttonLabel={buttonLabel}
      gridProperties={gridProperties}
      inputContents={inputContents}
    />
  );
}

export default AddUserForm;
