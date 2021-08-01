import { useFormik } from "formik";
import React, { useEffect } from "react";
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
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { CreateProductSchema } from "../../validationScrema/product";
import { createProduct, getProducts } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function EditProduct({ product = {} }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "", //user.Company_name,
      ...product,
    },
    validationSchema: CreateProductSchema,
    onSubmit: (values) => {
      console.log(values);
      //   dispatch(createProduct(values));
      //   formik.resetForm();
    },
    enableReinitialize: true,
  });
  return (
    <React.Fragment>
      <ModalBody>
        <Form className="custom-input">
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
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={formik.handleSubmit}>
          Save
        </Button>
      </ModalFooter>
    </React.Fragment>
  );
}
