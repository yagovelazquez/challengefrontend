import Flex from "../../chakraUi/Flex";
import * as Yup from "yup";
import Form from "../../commom/Form";
import HeaderFormElement from "./HeaderFormElement";
import useUser from "../../../hooks/useUser";
import { useQueryClient, useMutation, } from "react-query";
import { queryKeys } from "../../../reactQuery/queryConstants";
import { authServerCall } from "../../../lib/fetchServer";
import config from "../../../config/appConfig"
import { useNavigate } from "react-router-dom";



function Login() {


    const { updateUser } = useUser();
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const { mutate } = useMutation(
        (values) => {
          return authServerCall(values, `${config.BASE_URL}/auth`);
        },
        {
          onMutate: () => {
            queryClient.cancelQueries(queryKeys.user);
          },
          onSuccess: (data) => {
            updateUser(data);
            navigate('/')
          },
        }
      );

      const submitFormHandler = (values, resetForm) => {
        mutate(values);
        resetForm();
      };


    
  const validationSchema = Yup.object({
    pin: Yup.string().required("Please enter a valid pin"),
  });

  const gridProperties = {
    gridTemplateAreas: "'titleHeader' 'pin'  'submitButton'",
    width: "320px",
    padding: "20px",
    alignContent: "start",
    gap: "30px",
    bg: "white",
    marginTop: "50px",
    borderRadius: "3px",
    boxShadow: "0 0 15px 1px rgba(0,0,0,0.4)",
    height: "350px",
  };

  const inputContents = [
    {
      label: "Pin*",
      name: "pin",
      inputType: "input",
    },
  ];
  const buttonLabel = "LOGIN";
  const headerFormElementTitle = "Access Ponto Challenge";
  const headerFormElementSubTitle = "Please, insert your pin";
  const AnyElements = [
    {
      Element: () => (
        <HeaderFormElement
          headerFormElementSubTitle={headerFormElementSubTitle}
          headerFormElementTitle={headerFormElementTitle}
        />
      ),
      key: "titleHeader",
    },
  ];

  return (
    <Flex
      gridArea="titleHeader"
      bg="#1E97F7"
      width="100vw"
      height="100vh"
      justifyContent="center"
    >
      <Form
        onSubmitForm={submitFormHandler}
        validationSchema={validationSchema}
        buttonLabel={buttonLabel}
        gridProperties={gridProperties}
        inputContents={inputContents}
        AnyElements={AnyElements}
      />
    </Flex>
  );
}

export default Login;
