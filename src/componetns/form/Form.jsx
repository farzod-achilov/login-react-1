import React, { useState, useEffect } from "react";
import "./Form.scss";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const errors = {};
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number";
    }

    setFormErrors(errors);
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="submit">
            {" "}
            Submit
          </button>
        </div>
        <p>P.S ChatGPTdan foydalanilgan</p>
      </form>
    </div>
  );
}

export default Form;
