import * as Yup from "yup";
const CreateCouponSchema = Yup.object().shape({
  title: Yup.string().required("Title Required"),
});
export { CreateCouponSchema };
