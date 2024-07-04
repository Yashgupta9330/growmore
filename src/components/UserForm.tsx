import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { UserData } from "../types/Userdata";


// Define a Zod schema for validation
const userDataSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phoneNumber: z.string().min(10, { message: "Phone number is required and it should be of length 10" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
});


const UserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Validate the form data using Zod schema
    const result = userDataSchema.safeParse({ name, phoneNumber, email});

    if (result.success) {
      // If validation succeeds, proceed with saving to localStorage and navigating
      const userData: UserData= result.data;
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Login Successful!");
      navigate("/");
    } 
    else {
      // Handle validation errors (optional)
      console.error("Validation errors:", result.error.errors[0].message);
      alert(result.error.errors[0].message);
    }
  };

  return (
    <div className="form">
      <h2>Enter Your Details</h2>
      <TextField
        className="input-field"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="input-field"
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        className="input-field"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     
      <Button
        className="submit-button"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default UserForm;
