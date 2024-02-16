import React, { useState } from "react";
import StyleHome from ".././Home/Home.module.css";
import Style from "./TaskList.module.css";
import { useNavigate } from "react-router-dom";

const PinConfirmation = ({ setConfModal, id, pin }) => {
  const [pinValidation, setPinValidation] = useState("");
  const [alert, setAlert] = useState(false);
  let navigate = useNavigate();
  const pinConfirm = () => {
    if (pin == pinValidation) {
      navigate(`/task/${id}`);
      setAlert(false);
      setConfModal(false);
    } else {
      setAlert(true);
    }
  };
  return (
    <div className="overlay">
      <div className={StyleHome.modal}>
        <h1>Enter your pin to continue</h1>
        <input
          type="number"
          id="pin"
          placeholder="Enter pin"
          value={pinValidation}
          onChange={(e) => setPinValidation(e.target.value)}
        />
        {alert && (
          <label htmlFor="pin" className={Style.alert}>
            Incorrect pin
          </label>
        )}
        <div className={Style.pin_buttons}>
          <button onClick={pinConfirm}>Confirm</button>
          <button onClick={()=>setConfModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PinConfirmation;
