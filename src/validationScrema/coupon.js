import * as Yup from "yup";
const CreateCouponSchema = Yup.object().shape({
  name: Yup.string().required("Name Required"),
  code: Yup.string().required("Code Required"),
  duration: Yup.string().required("Duration Required"),
  amount_off: Yup.string().required("Off Amount Required"),
});
export { CreateCouponSchema };
