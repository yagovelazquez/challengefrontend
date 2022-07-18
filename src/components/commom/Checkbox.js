import {  Field } from "formik";
import Text from "../chakraUi/Text";
import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
 

function Checkbox(props) {
    const {name, checkBoxProperties, label, checkBoxLabelProperties, field} = props


    return (  <Field
        type="checkbox"
        id={name}
        as={ChakraCheckbox}
        name={name}
        isChecked={field.value}
        size="lg"
        colorScheme="black"
        {...checkBoxProperties}
      >
        <Text {...checkBoxLabelProperties}>{label}</Text>
      </Field> );
}

export default Checkbox;


