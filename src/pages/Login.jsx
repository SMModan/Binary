import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../redux/action";
import "../assets/css/login.css";
import { useFormik } from "formik";
import { LoginSchema } from "../validationScrema/user";

export default function Login() {
  const { push } = useHistory();
  const isLoggedin = useSelector((state) => state.userDataReducer.isLoggedin);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(login());
      // console.log(values);
    },
  });
  useEffect(() => {
    if (isLoggedin) {
      push("/home");
    }
  }, [isLoggedin]);
  const { errors, touched } = formik;
  return (
    <div className="content wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <FontAwesomeIcon className="m-2" size="4x" icon={faUserCircle} />
        </div>

        {/* <!-- Login Form --> */}
        <form>
          <input
            type="text"
            className="fadeIn second"
            name="email"
            placeholder="login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={formik.handleSubmit}
          />
        </form>
        {/* <hr/> */}
        <p className="text-secondary text-center">
          or Register <Link to="/register">here</Link>{" "}
        </p>
        {/* <!-- Remind Passowrd --> */}
        <div id="formFooter">
          <Link className="underlineHover" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
