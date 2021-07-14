import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/action";
import "../assets/css/login.css";
import { useFormik } from "formik";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login());
      console.log(values);
    },
  });

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
            name="name"
            placeholder="login"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            type="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
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
