import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

const inputData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [details, setDetails] = useState(inputData);
  const { email, password } = details;

  const resetForm = () => {
    setDetails(inputData);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetForm();
    } catch (err) {
      console.log(err);
      if (err.code === "auth/invalid-credential") {
        alert("incorrect email or/and password");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account? </h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email:"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password:"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
