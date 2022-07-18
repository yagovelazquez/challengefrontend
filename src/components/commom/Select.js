import {  Field } from "formik";
import { Select as SelectChakra } from "@chakra-ui/react";

function Select(props) {
  const { name, selectProperties, selectOptions, meta } = props;


  return (
    <Field
      _focus={{ borderColor: "black", boxShadow: "0 0 0 0px " }}
      id={name}
      as={SelectChakra}
      name={name}
      {...selectProperties}
      _invalid={{ borderColor: "#cb2b2b !important" }}
    >
      {!meta.value && <option> </option>}

      {selectOptions.map((option) => {
        const name = option.name;
        return (
          <option
            id={name}
            name={name}
            label={name}
            value={option.value || name}
            key={name}
          ></option>
        );
      })}
    </Field>
  );
}

export default Select;
