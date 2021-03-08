import React from "react";
import FormInput from "../utilities/form-input/form-input.component";
import CustomButton from "../utilities/custom-button/custom-button.component";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../firebase/firebase.utils.js";
import { auth, checkUserAuth } from "../../firebase/firebase.utils.js";
import "./sign-in.component.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await auth.signInWithEmailAndPassword(
          this.state.email,
          this.state.password
        );
        this.setState({
          email: "",
          password: "",
        });
      } catch (err) {
        console.log(err.message, "user not exists");
      }
      this.setState({
        email: "",
        password: "",
      });
    };
    const handleChange = (e) => {
      const { value, name } = e.target;
      this.setState({
        [name]: value,
      });
    };

    return (
      <div className="sign-in">
        <h2>I already have an accout</h2>
        <span>sign with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            name="email"
            label="email"
            value={this.state.email}
            type="email"
            handleChange={handleChange}
            required
          />
          <FormInput
            id="password"
            name="password"
            label="Password"
            value={this.state.password}
            type="password"
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              isGoogleSignIn
              type="button"
              onClick={signInWithGoogle}
              type="submit"
            >
              {""} SignIn with Google {""}
            </CustomButton>
            <CustomButton onClick={signInWithFacebook} type="submit">
              {""} SignIn with Facebook {""}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
