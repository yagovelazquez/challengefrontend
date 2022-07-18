import Flex from "../../chakraUi/Flex";
import * as Yup from "yup";
import Form from "../../commom/Form";
import useUser from "../../../hooks/useUser";
import { useQueryClient, useMutation } from "react-query";
import { queryKeys } from "../../../reactQuery/queryConstants";
import { generalPostCall } from "../../../lib/fetchServer";
import config from "../../../config/appConfig";
import { useNavigate } from "react-router-dom";
import Button from "../../chakraUi/Button";
import { clone as _clone } from "lodash";

function TimeClockForm(props) {
  const { onClose } = props;
  const { user, updateStoragedUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (values) => {
      const { clockUrl, ...restValues } = values;
      restValues.token = user.token;
      return generalPostCall(restValues, `${config.BASE_URL}/${clockUrl}`);
    },
    {
      onMutate: () => {
        queryClient.cancelQueries(queryKeys.userClockTimes);
      },
      onSuccess: (values, variable) => {
        queryClient.setQueryData([queryKeys.userClockTimes], (oldValue) => {
          const updatedClockTimes = _clone(oldValue);
          if (variable.clockType === "clockIn") {
            updatedClockTimes.unshift({ ...values });
          } else {
            updatedClockTimes[0] = values;
          }
          updateStoragedUser({ clockTimes: updatedClockTimes }, true);
          return updatedClockTimes;
        });

        onClose();
      },
    }
  );

  const submitFormHandler = (values, resetForm) => {
    let clockUrl = "clock-timer/other-clocks";
    if (values.clockType === "clockIn") {
      clockUrl = "clock-timer/clock-in";
    }

    values.clockUrl = clockUrl;
    mutate(values);
    resetForm();
  };

  const validationSchema = Yup.object({
    clockType: Yup.string().required("Please select one option"),
    comment: Yup.string(),
  });

  const gridProperties = {
    gridTemplateAreas: " 'clockType' 'comment'  'submitButton' 'cancelButton'",
    width: "100%",
    alignContent: "start",
    bg: "white",
    borderRadius: "3px",
    height: "300px",
  };

  const inputContents = [
    {
      labelProperties: {
        fontSize: "1.2rem",
        fontWeight: "500",
      },
      label: "Choose Punch in Type*",
      name: "clockType",
      inputType: "radio",
      radioOptions: [
        {
          label: "Clock In",
          value: "clockIn",
        },
        { label: "Clock Out", value: "clockOut" },
        { label: "Break Begin", value: "breakBegin" },
        { label: "Break End", value: "breakEnd" },
      ],
    },
    {
      label: "Comment",
      name: "comment",
      inputType: "input",
    },
  ];
  const buttonLabel = "SUBMIT";
  const buttonProperties = { marginBottom: "15px" };
  const gridItemProperties = { marginBottom: "30px !important" };

  const AnyElements = [
    {
      Element: () => (
        <Button
          fontSize="14px"
          fontWeight="300"
          width="100%"
          height="37px"
          variant="invert"
          gridArea="cancelButton"
          onClick={onClose}
        >
          CANCEL
        </Button>
      ),
      key: "titleHeader",
    },
  ];

  return (
    <Form
      onSubmitForm={submitFormHandler}
      validationSchema={validationSchema}
      buttonLabel={buttonLabel}
      buttonProperties={buttonProperties}
      gridItemProperties={gridItemProperties}
      gridProperties={gridProperties}
      AnyElements={AnyElements}
      inputContents={inputContents}
    />
  );
}

export default TimeClockForm;
