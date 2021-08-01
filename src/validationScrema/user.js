import * as Yup from "yup";
function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);
const SignupSchema = Yup.object().shape({
  Company_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // Employee_size: Yup.number("Must be number")
  //   .required("Is required")
  //   .positive()
  //   .integer()
  //   .min(0, "Min is 0")
  //   .max(22, "max is 20"),
  Industry_ID: Yup.number().required("Industry is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string()
    .equalTo(Yup.ref("password"), "Passwords must match")
    .required("Required"),
});
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is Required"),
});
export { SignupSchema, LoginSchema, ForgotPasswordSchema };
