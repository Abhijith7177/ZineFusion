import React, { useState } from "react";
import "../../Css/Login&singup/LoginPage.scss";
import { Row, Col, Input, Form } from "antd";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
import OTPInput from "otp-input-react";
import { SocialIcon } from "react-social-icons";
function Login({ setComponentName }) {
  
  return (
    <div className="loginField_booking">
      <form >
      <center>
        <div>
          <Input
            className="Singup_Input_field"
            id="email"
            placeholder="Email"
            style={{ marginBottom: "20px", width: "50%", height: "44px" }}
          />
        </div>
        <div>
          <Input.Password
            className="Singup_Input_field"
            id="password"
            placeholder="Password"
            style={{ marginBottom: "7px", width: "50%", height: "44px" }}
          />
        </div>
        <Link
          onClick={() => setComponentName("ForgotPassword")}
          className="Login_ForgotButton"
        >
          Forgot Password?
        </Link>
      </center>
      <center>
        <div className="loginPage_button_1">
          <button type="submit" className="loginBackgroundStyle">Login</button>
        </div>
      </center>
      </form>
    </div>
  );
}

function ForgotPassword({ setComponentName }) {
  return (
    <div className="loginField_booking">
      <center>
        <div>
          <Input
            className="Singup_Input_field"
            id="email"
            placeholder="Email"
            style={{ marginBottom: "20px", width: "50%", height: "44px" }}
          />
        </div>
        <Link
          onClick={() => setComponentName("Login")}
          className="Login_ForgotButton_1"
        >
          <span style={{ fontSize: "14px" }}>
            <RxDoubleArrowLeft
              className="RxDoubleArrowLeft_forgot"
              style={{ paddingRight: "5px" }}
            />
          </span>
          Back to Login
        </Link>
        <center>
          <div className="loginPage_button_1">
            <button
              className="loginBackgroundStyle"
              onClick={() => setComponentName("Otpinput")}
            >
              Send OTP
            </button>
          </div>
        </center>
      </center>
    </div>
  );
}

function Otp({ setComponentName }) {
  const [forgototpnumber, setforgototpnumber] = useState("");

  return (
    <Form layout="vertical" className="forgot_username">
      <OTPInput
        className="otp_input"
        OTPLength={4}
        otpType="number"
        value={forgototpnumber}
        onChange={setforgototpnumber}
      />

      <center>
        <div className="loginPage_button_1" style={{ margin: "15px" }}>
          <button
            className="loginBackgroundStyle"
            onClick={() => setComponentName("Changepassword")}
          >
            verify
          </button>
        </div>
      </center>
    </Form>
  );
}

function ChangePassword({ setComponentName }) {
  return (
    <div>
      <center>
        <div>
          <Input.Password
            className="Singup_Input_field"
            id="newPassword"
            placeholder="New Password"
            style={{ marginBottom: "20px", width: "50%", height: "44px" }}
          />
        </div>
        <div>
          <Input.Password
            className="Singup_Input_field"
            id="confirmPassword"
            placeholder="Confirm Password"
            style={{ marginBottom: "7px", width: "50%", height: "44px" }}
          />
        </div>
        <Link
          onClick={() => setComponentName("Login")}
          className="Login_ForgotButton_1"
        >
          <span style={{ fontSize: "14px" }}>
            <RxDoubleArrowLeft
              className="RxDoubleArrowLeft_forgot"
              style={{ paddingRight: "5px" }}
            />
          </span>
          Back to Login
        </Link>
        <center>
          <div className="loginPage_button_1">
            <button
              className="loginBackgroundStyle"
              onClick={() => setComponentName("Login")}
            >
              Confirm
            </button>
          </div>
        </center>
      </center>
    </div>
  );
}

function PageView({ pageType, setComponentName }) {
  switch (pageType) {
    case "ForgotPassword":
      return <ForgotPassword setComponentName={setComponentName} />;
    case "Login":
      return <Login setComponentName={setComponentName} />;
    case "Otpinput":
      return <Otp setComponentName={setComponentName} />;
    case "Changepassword":
      return <ChangePassword setComponentName={setComponentName} />;
    default:
      return <Login setComponentName={setComponentName} />;
  }
}

const LoginPage = () => {
  const [componentName, setComponentName] = useState("");

  return (
    <div>
      <Row>
        <Col lg={12} md={12} xs={24} className="left_side_loginPageimg"></Col>
        <Col lg={12} md={12} xs={24} className="Right_side_loginPageFields">
          <div className="Login_Container">
            <div className="loginContent_Container">
              <center
                style={{
                  fontWeight: "bolder",
                  fontSize: "25px",
                  color: "#F8F0E5",
                }}
              >
                Welcome to Zine Fusion
              </center>
              <center
                style={{
                  fontWeight: "bolder",
                  fontSize: "13px",
                  color: "#F8F0E5",
                }}
              >
                <p>
                  Create an Account By?{" "}
                  <Link to="/signin" className="LoginSingupBtn_clss">
                    Sign Up
                  </Link>
                </p>
              </center>
              <PageView
                pageType={componentName}
                setComponentName={setComponentName}
              />
            </div>

            <center
              style={{
                fontWeight: "bolder",
                fontSize: "16px",
                color: "#F8F0E5",
                marginTop: "50px",
              }}
            >
              Or Continue with:
            </center>
            <div className="signupOptions">
              <center>
                <div>
                  <SocialIcon
                    network="facebook"
                    url="https://facebook.com"
                    style={{ width: "40px", height: "40px", margin: "8px" }}
                  />
                  <SocialIcon
                    network="instagram"
                    url="https://instagram.com"
                    style={{ width: "40px", height: "40px", margin: "8px" }}
                  />
                  <SocialIcon
                    network="twitter"
                    url="https://twitter.com"
                    style={{ width: "40px", height: "40px", margin: "8px" }}
                  />
                  <SocialIcon
                    network="email"
                    url="https://gmail.com"
                    bgColor="red"
                    style={{ width: "40px", height: "40px", margin: "8px" }}
                  />
                </div>
              </center>
              <center
                style={{
                  marginTop: "15px",
                  color: "#DAC0A3",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <div>All rights reserved.</div>
                <div style={{ marginTop: "3px" }}>
                  Copyright (2023 - 2033) - Zine Fusion.com™
                </div>
              </center>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
