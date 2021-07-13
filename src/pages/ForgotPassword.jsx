import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

export default function ForgotPassword() {
  return (
    <div className="container wrapper">
      <div className="panel panel-default" style={{ maxWidth: "400px" }}>
        <div className="panel-body">
          <div className="text-center">
            <h3>
              <i className="fa fa-lock fa-4x"></i>
            </h3>
            <h2 className="text-center">Forgot Password?</h2>
            <p>You can reset your password here.</p>
            <div className="panel-body">
              <form
                id="register-form"
                role="form"
                autocomplete="off"
                className="form"
                method="post"
              >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope color-blue"></i>
                    </span>
                    <input
                      id="email"
                      name="email"
                      placeholder="email address"
                      className="form-control"
                      type="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  {/* <input
                        name="recover-submit"
                        className="btn btn-lg btn-primary btn-block"
                        value="Reset Password"
                        
                      /> */}
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="button"
                  >
                    Reset Password
                  </button>
                </div>

                <input
                  type="hidden"
                  className="hide"
                  name="token"
                  id="token"
                  value=""
                />
              </form>
              <p className="text-center">
                Go Back to <Link to="/login">Log In</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
