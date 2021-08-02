import { useFormik } from "formik";
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { CreatePlanSchema } from "../../validationScrema/plan";
import { createPlan } from "../../redux/action";
import { useDispatch } from "react-redux";
export default function CreatePlanForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "", //user.Company_name,
    },
    validationSchema: CreatePlanSchema,
    onSubmit: (values) => {
      dispatch(createPlan(values));
      formik.resetForm()
    },
    enableReinitialize: true,
  });
  return (
    <Card>
      <CardHeader>
        <h5 className="title">Create Plan</h5>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col className="pr-md-1" md="5">
              <FormGroup>
                <label>Plan Title</label>
                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="Title"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
      <CardFooter>
        <Button
          className="btn-fill"
          color="primary"
          type="button"
          onClick={formik.handleSubmit}
        >
          Create
        </Button>
      </CardFooter>
    </Card>
  );
}
