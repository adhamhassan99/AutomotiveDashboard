import React from "react";
import { useState } from "react";
import Link from "react-router-dom";

import { signInAuthUserWithEmailAndPassword } from "../../Utils/Firebase/Firebase.utils";

import "./SignInForm.styles.scss";

import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            label="Email"
            placeholder="email@gmail.com"
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            label="Password"
            placeholder="**********"
          />
        </div>
        <CustomButton signInProvider="primary" onClick={handleSubmit}>
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignInForm;
