import React from "react";
import { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { setUID, setisLoggedIn } from "../../features/user/userSlice";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { signInAuthUserWithEmailAndPassword } from "../../Utils/Firebase/Firebase.utils";

import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../FormInput/FormInput.component";
import RememberMe from "../RememberMe/RememberMe.component";

import "./SignInForm.styles.scss";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const uid = useSelector((state) => state.user.uid);

  const dispatch = useDispatch();

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
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      batch(() => {
        dispatch(setUID(user.uid));
        dispatch(setisLoggedIn(true));
      });

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedIn) {
    return <Navigate replace to="/dashboard" state={[loggedIn, uid]} />;
  } else {
    return (
      <div className="sign-in-container">
        <form className="form-container" onSubmit={handleSubmit}>
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
              placeholder="Password"
            />
          </div>
          <RememberMe />
          <CustomButton signInProvider="primary">Sign In</CustomButton>
        </form>
      </div>
    );
  }
};

export default SignInForm;
