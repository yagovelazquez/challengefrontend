import Drawer from "./../commom/Drawer";
import AddUserForm from "./AddUserForm";

function AddUserDrawer({ isOpen, onClose }) {
  return (
    <Drawer title="Add new employee" isOpen={isOpen} onClose={onClose}>
      <AddUserForm />
    </Drawer>
  );
}

export default AddUserDrawer;
