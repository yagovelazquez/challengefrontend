import Modal from "../../chakraUi/Modal";
import TimeClockForm from "./TimeClockForm";

function TimeClockModal(props) {

  const {onClose} = props



  return (
    <Modal
      {...props}
    >
      <TimeClockForm onClose={onClose} />
    </Modal>
  );
}

export default TimeClockModal;
