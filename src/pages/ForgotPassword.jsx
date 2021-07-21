import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { forgotPassword } from "../redux/action";
import "../assets/css/login.css";
import { ForgotPasswordSchema } from "../validationScrema/user";

export default function ForgotPassword() {
  const { push } = useHistory();
  const isForgotpasswordSuccess = useSelector(
    (state) => state.userDataReducer.isForgotpasswordSuccess
  );
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
  });
  useEffect(() => {
    if (isForgotpasswordSuccess) {
      push("/login");
    }
  }, [isForgotpasswordSuccess]);
  const { errors, touched } = formik;
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
                      name="email"
                      placeholder="email address"
                      className="form-control"
                      type="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  {errors.email && touched.email && <div>{errors.email}</div>}
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="button"
                    onClick={formik.handleSubmit}
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
