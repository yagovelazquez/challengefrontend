import React from "react";
import { Formik } from "formik";
import { Grid, GridItem } from "@chakra-ui/react";
import Text from "../chakraUi/Text";
import Button from "../chakraUi/Button";
import TextField from "./TextField";



const Form = ({
  inputContents,
  buttonLabel,
  validationSchema,
  gridProperties,
  AnyElements,
  onSubmitForm,
  buttonProperties,
  successMessage,
  checkBoxProperties,
  errorMessage,
  inputProperties,
  gridItemProperties,
  labelProperties,
  formikProps,
}) => {

  let initialValues = {};

  inputContents.forEach((inputContent) => {
    if (inputContent.inputType === "checkbox") {
      initialValues[inputContent.name] = inputContent.initialValue || false;
      return;
    }
    initialValues[inputContent.name] = inputContent.initialValue || "";
  });




  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setTouched }) => {
        onSubmitForm(values, resetForm, setTouched);
      }}
      {...formikProps}
    >
      {(formik) => (
        <>
          <Grid
            as="form"
            alignItems="center"
            justifyItems="center"
            onSubmit={formik.handleSubmit}
            {...gridProperties}
          >
            {successMessage && (
              <Text
                gridArea={"successMessage"}
              >
                {successMessage}
              </Text>
            )}
            {errorMessage && (
              <Text
              gridArea={"errorMessage"}
              >
                {errorMessage}
              </Text>
            )}

            {inputContents.map((inputContent) => {
                return  (
                  <GridItem
                    key={inputContent.name}
                    width="100%"
                    gridArea={inputContent.name}
                {...gridItemProperties}
                  >
                    <TextField
                    inputProperties={inputProperties}
                    placeHolder={inputContent.placeHolder}
                    labelProperties={labelProperties}
                    checkBoxProperties={checkBoxProperties}
                    key={inputContent.name}
                    {...inputContent}
                  ></TextField>
                  </GridItem>
                ) 
              })}

           
            {AnyElements && AnyElements.map(ElementObj => <ElementObj.Element key={ElementObj.key} />)}

            <Button
              fontSize="14px"
              fontWeight="300"
              width="100%"
              height="37px"
              type="submit"
              gridArea="submitButton"
              disabled={
                buttonProperties?.allowdisable &&
                (!formik.isValid || !formik.dirty)
              }
              {...buttonProperties}
            >
              {buttonLabel}
            </Button>
          </Grid>
        </>
      )}
    </Formik>
  );
};

export default Form;
