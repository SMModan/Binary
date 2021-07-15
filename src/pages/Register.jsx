import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignupSchema } from "../validationScrema/user";
import "../assets/css/register.css";
import { register } from "../redux/action";
import { useHistory } from "react-router";

export default function Register() {
  const { push } = useHistory();
  const isRegisterd = useSelector((state) => state.userDataReducer.isRegisterd);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isRegisterd) {
      push("/login");
    }
  }, [isRegisterd]);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(register());
    },
  });
  const { errors, touched } = formik;
  console.log(errors.email, touched.email);
  return (
    <div className="container">
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p className="text-center">Get started with your free account</p>
          <p>
            <a href="" className="btn btn-block btn-twitter">
              {" "}
              <i className="fab fa-twitter"></i>   Login via Twitter
            </a>
            <a href="" className="btn btn-block btn-facebook">
              {" "}
              <i className="fab fa-facebook-f"></i>   Login via facebook
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user"></i>{" "}
                </span>
              </div>
              <input
                name="fullname"
                className="form-control"
                onBlur={formik.handleBlur}
                placeholder="Full name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
              {errors.fullname && touched.fullname && (
                <div>{errors.fullname}</div>
              )}
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-envelope"></i>{" "}
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="EmailAddress"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                name="password"
                className="form-control"
                onBlur={formik.handleBlur}
                placeholder="Create password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                name="passwordConfirmation"
                className="form-control"
                onBlur={formik.handleBlur}
                placeholder="Repeat password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
              />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <div>{errors.passwordConfirmation}</div>
              )}
            </div>
            <div className="form-group">
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="btn btn-primary btn-block"
              >
                {" "}
                Create Account{" "}
              </button>
            </div>
            {/* <!-- form-group// -->       */}
            <p className="text-center">
              Have an account? <Link to="/login">Log In</Link>{" "}
            </p>
          </form>
        </article>
      </div>
    </div>
  );
}
