import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Card, CardBody } from "reactstrap";
import { verifyOtp } from "../redux/action";
import "../assets/css/otp.css";
import { useDispatch } from "react-redux";

export default function VerifyOTP() {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const otpLength = otp.toString().length;
  const email = localStorage.getItem("email");
  const handleSubmit = () =>
    otpLength === 4 && dispatch(verifyOtp({ email, otp }));
    
  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card py-5 px-4">
        <h5 className="m-0">Email verification</h5>
        <span className="mobile-text mt-2">
          Welcome to Binery, We have send a otp to your email id{" "}
          <b className="text-info">{email}</b> please verify email to use
          services
        </span>
        <div className="d-flex flex-row mt-5">
          <OtpInput
            inputStyle="inputStyle"
            value={otp}
            isInputNum
            onChange={setOtp}
            numInputs={4}
            separator={<span>-</span>}
          />
        </div>
        <span
          onClick={handleSubmit}
          className={`${
            otpLength === 4 ? "text-danger cursor" : ""
          } text-center font-weight-bold  mt-3`}
        >
          Verify
        </span>

        <div className="text-center mt-3">
          <span className="d-block mobile-text">Don't receive the code?</span>
          <span className="font-weight-bold text-danger cursor">Resend</span>
        </div>
      </div>
    </div>
  );
}
