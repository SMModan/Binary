import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignupSchema } from "../validationScrema/user";
import "../assets/css/register.css";
import { register } from "../redux/action";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { getIndustries } from "../service/APIcalls";

export default function Register() {
  const { push } = useHistory();
  const [industryOptions, setIndustryOptions] = useState([]);
  useEffect(() => {
    getIndustries(setIndustryOptions);
  }, []);
  
  const loading = useSelector((state) => state.userDataReducer.loading);
  const isRegisterd = useSelector((state) => state.userDataReducer.isRegisterd);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isRegisterd) {
      push("/verify-OTP");
    }
  }, [isRegisterd]);
  const formik = useFormik({
    initialValues: {
      Company_name: "",
      Industry_ID: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      Employee_size: null,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(register(values));
    },
  });
  const { errors, touched } = formik;

  return (
    <div className="content wrapper fadeInDown custom-input">
      <div id="formContent">
        <div className="fadeIn first">
          <FontAwesomeIcon className="m-2" size="4x" icon={faUserCircle} />
        </div>

        {/* <!-- Login Form --> */}
        <form>
          <input
            name="Company_name"
            className="form-control"
            onBlur={formik.handleBlur}
            placeholder="Company name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Company_name}
          />
          {errors.Company_name && touched.Company_name && (
            <div>{errors.Company_name}</div>
          )}

          {/* <input
            name="Employee_size"
            className="form-control"
            placeholder="Employee size"
            type="number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.Employee_size}
          />
          {errors.Employee_size && touched.Employee_size && (
            <div>{errors.Employee_size}</div>
          )} */}
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
          <input
            name="password"
            className="form-control"
            onBlur={formik.handleBlur}
            placeholder="Create password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
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
          <Select
            placeholder="Industry"
            styles={{
              container: (base) => ({
                ...base,
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "5px",
                width: "85%",
                transition: "all 0.5s ease-in-out",
                borderRadius: "5px 5px 5px 5px",
              }),
              control: (base) => ({
                ...base,
                borderRadius: 5,
                border: "none",
                backgroundColor: "hsl(0deg 0% 96%)",
              }),
              placeholder: (base) => ({
                ...base,
                padding: "15px 25px",
              }),
              singleValue: (base) => ({
                ...base,
                padding: "15px 25px",
              }),
            }}
            onBlur={formik.handleBlur}
            onChange={(selectedOption) => {
              formik.setFieldValue("Industry_ID", selectedOption.value);
              // This inline function can now completely be reaplce by handleChange("Industry_ID")
              // formik.handleChange("Industry_ID")(selectedOption);
            }}
            // isSearchable={true}
            options={industryOptions}
            name="Industry_ID"
            // isLoading={false}
            // loadingMessage={() => "Fetching Industry"}
            // noOptionsMessage={() => "Industry appears here"}
          />
          {errors.Industry_ID && touched.Industry_ID && (
            <div>{errors.Industry_ID}</div>
          )}
          <input
            type="submit"
            className="fadeIn fourth"
            value="Create Account"
            disabled={!(formik.isValid && formik.dirty) || loading || isRegisterd}
            onClick={formik.handleSubmit}
          />
        </form>
        {/* <hr/> */}
        <p className="text-dark text-center">
          Have an account? <Link to="/login">Log In</Link>{" "}
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
