import * as Yup from "yup";
const CreatePlanSchema = Yup.object().shape({
  title: Yup.string().required("Title Required"),
});
export { CreatePlanSchema };
