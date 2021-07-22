import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Card, CardBody } from "reactstrap";
import "../assets/css/otp.css";
export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  return (
    <div className="content wrapper fadeInDown">
      <Card className="w-auto">
        <CardBody>
          {" "}
          <div className="margin-top--small">
            <OtpInput
              inputStyle="inputStyle"
              value={otp}
              onChange={(input) => setOtp(input)}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
