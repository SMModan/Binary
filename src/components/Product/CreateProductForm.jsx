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
import { CreateProductSchema } from "../../validationScrema/product";
import { createProduct } from "../../redux/action";
import { useDispatch } from "react-redux";
export default function CreateProductForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "", //user.Company_name,
    },
    validationSchema: CreateProductSchema,
    onSubmit: (values) => {
      dispatch(createProduct(values));
      formik.resetForm()
    },
    enableReinitialize: true,
  });
  return (
    <Card>
      <CardHeader>
        <h5 className="title">Create Product</h5>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col className="pr-md-1" md="5">
              <FormGroup>
                <label>Product Title</label>
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
