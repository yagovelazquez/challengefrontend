import { useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Radio from "./Radio";

const TextField = (props) => {
  const {
    label,
    selectOptions,
    name,
    type,
    inputType,
    checkBoxLabelProperties,
    radioOptions,
    inputProperties,
    labelProperties,
    selectProperties,
    placeHolder,
    checkBoxProperties,
  } = props;

  const [field, meta] = useField(props);

  return (
    <FormControl
      variant={inputType === "input" && "floating"}
      isInvalid={meta.error && meta.touched}
    >
      {inputType === "input" && (
        <Input
          name={name}
          field={field}
          inputProperties={inputProperties}
          type={type}
        />
      )}

      {inputType === "select" && (
        <Select
          name={name}
          meta={meta}
          selectOptions={selectOptions}
          selectProperties={selectProperties}
        />
      )}

      {inputType === "checkbox" && (
        <Checkbox
          field={field}
          label={label}
          checkBoxLabelProperties={checkBoxLabelProperties}
          name={name}
          checkBoxProperties={checkBoxProperties}
        />
      )}
      {inputType !== "checkbox" && !placeHolder && (
        <FormLabel
          fontWeight="400"
          _invalid={{ color: "#E53E3E" }}
          {...labelProperties}
        >
          {label}
        </FormLabel>
      )}
      {inputType === "radio" && (
        <Radio name={name} field={field} radioOptions={radioOptions} />
      )}
      {inputType !== "checkbox" && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextField;
