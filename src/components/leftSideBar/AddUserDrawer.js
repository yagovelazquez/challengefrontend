import Drawer from "./../commom/Drawer";
import AddUserForm from "./AddUserForm";
import { useState } from "react";
import Text from "../chakraUi/Text";
import Button from "../chakraUi/Button";

function AddUserDrawer({ isOpen, onClose }) {
  const [userPin, setUserPin] = useState();

  const closeHandler = () => {
    setUserPin(null);
    onClose();
  };

  const addAnotherEmployeeHandler = () => {
    setUserPin(null);
  };

  return (
    <Drawer title="Add new employee" isOpen={isOpen} onClose={closeHandler}>
      {!userPin && <AddUserForm onUserPin={setUserPin} />}
      {userPin && (
        <>
          <Text>Use the employee pin {userPin} to login</Text>
          <Button
            fontSize="14px"
            fontWeight="300"
            width="100%"
            height="37px"
            onClick={addAnotherEmployeeHandler}
            marginTop="30px"
          >
            ADD ANOTHER EMPLOYEE
          </Button>
        </>
      )}
    </Drawer>
  );
}

export default AddUserDrawer;
