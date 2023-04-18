import { useState } from "react";
import Button from "../Button/Button";
import "./styles.scss";
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [invalidPhoneNo, setInvalidPhoneNo] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  let content;
  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
    setInvalidName(false);
  };
  const enteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
    setInvalidEmail(false);
  };
  const enteredPhoneNoHandler = (e) => {
    setEnteredPhoneNo(e.target.value);
    setInvalidPhoneNo(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      regex.test(enteredEmail) &&
      enteredPhoneNo.trim().length >= 11 &&
      enteredName.trim().length > 0
    ) {
      const data = {
        name: enteredName,
        phonenumber: enteredPhoneNo,
        email: enteredEmail,
      };
      props.data(data);
      setEnteredName("");
      setEnteredEmail("");
      setEnteredPhoneNo("");
    }

    if (!regex.test(enteredEmail)) {
      setInvalidEmail(true);
    }
    if (enteredPhoneNo.length < 11) {
      setInvalidPhoneNo(true);
    }
    if (!enteredName.trim().length > 0) {
      setInvalidName(true);
    }
  };
  if (invalidName) {
    content = "Please input your name";
  }
  if (invalidEmail) {
    content = "Please input a valid email address";
  }
  if (invalidPhoneNo) {
    content = "Please input a valid phone number";
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label>Full name</label>
        <input
          type="text"
          value={enteredName}
          placeholder="John Doe"
          onChange={enteredNameHandler}
        />
      </div>
      <div>
        <label>Enter your email address</label>
        <input
          type="email"
          value={enteredEmail}
          placeholder="Enter your email address"
          onChange={enteredEmailHandler}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={enteredPhoneNo}
          placeholder="Enter your phone number"
          onChange={enteredPhoneNoHandler}
        />
        {(invalidName || invalidEmail || invalidPhoneNo) && (
          <p className="invalid-email">Invalid {content}</p>
        )}
      </div>
      <Button className="form-btn" />
    </form>
  );
};
export default Form;
