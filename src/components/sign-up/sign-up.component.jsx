import React from "react";
import FormInput from "../utilities/form-input/form-input.component";
import CustomButton from "../utilities/custom-button/custom-button.component";
import { auth, checkUserAuth } from "../../firebase/firebase.utils.js";
import "./sign-up.component.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const handleChange = (e) => {
      const { name, value } = e.target;
      this.setState(
        {
          [name]: value,
        },
        () => {
          console.log(value);
        }
      );
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
        return alert("password don't match");
      }
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await checkUserAuth(user, { displayName });

        this.setState = {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
      } catch (err) {
        console.log(err.message, "form failed to submit");
      }
    };
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an accout</h2>
        <span>sign up with your email and password</span>
        <form onSubmit={handleSubmit} className="siup-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
