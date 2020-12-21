import React from "react";
import "./form-input.component.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} 'form-input'`}
        >
          {label}
        </label>
      ) : null}
      <input
        onChange={handleChange}
        {...otherProps}
        className="form-input"
      ></input>
    </div>
  );
};

export default FormInput;
