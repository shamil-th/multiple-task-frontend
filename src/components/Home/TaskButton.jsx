import React, { useState } from "react";
import Style from "./Home.module.css";
import PinModal from "./PinModal";

const TaskButton = ({ setModal }) => {
  const [pinModal, setPinModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const pinmodal = () => {
    setPinModal(true);
  };
  return (
    <div className={Style.buttons}>
      <button onClick={showModal}>Add Task</button>
      <button onClick={pinmodal}>Save</button>
      {pinModal && <PinModal setPinModal={setPinModal} />}
    </div>
  );
};

export default TaskButton;
