import React from "react";
import { useState } from "react";
import { useDispatch, batch, useSelector } from "react-redux";
import { setUID, setisLoggedIn } from "../../features/user/userSlice";

import "./SignUpForm.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/Firebase.utils";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import RememberMe from "../RememberMe/RememberMe.component";
import { Navigate } from "react-router-dom";

const defaultFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFields);
  const { firstName, lastName, email, password } = formFields;

  const loggedIn = useSelector((state) => state.user.isLoggedIn);

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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      batch(() => {
        dispatch(setUID(user.uid));
        dispatch(setisLoggedIn(true));
      });
      if (!user.displayName) {
        user.displayName = `${firstName} ${lastName}`;
      }
      await createUserDocumentFromAuth(user);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  if (!loggedIn) {
    return <Navigate to="/auth/signin" replace />;
  } else {
    return (
      <div className="sign-up-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-input-container">
            <FormInput
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
              label="First Name"
              placeholder="Adham"
            />

            <FormInput
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
              label="Last Name"
              placeholder="Hassan"
            />

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
          <CustomButton signInProvider="primary">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
};

export default SignUpForm;
