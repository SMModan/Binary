import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
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
import { CreatePlanSchema } from "../../validationScrema/plan";
import { createPlan, getProducts } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

export default function EditPlan({
  plan = {},
  setModal,
  isCreatePlan,
  loadingPlan,
  setLoadingPlan,
}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.ProductsReducer.productList);

  const formik = useFormik({
    initialValues: {
      product_id: plan.product_id,
      name: plan.title,
      description: plan.description,
      amount: plan.amount,
      plan_interval: plan.plan_interval,
      interval_count: plan.interval_count,
    },
    // validationSchema: CreatePlanSchema,
    onSubmit: (values) => {
      console.log(values);
      setLoadingPlan(true);
      dispatch(createPlan(values, plan.id || 0, setModal));
      // formik.resetForm();
    },
    enableReinitialize: true,
  });
  const ProductDropdown = productList.map((item) => ({
    label: item.title,
    value: item.id,
  }));
  return (
    <React.Fragment>
      <ModalBody>
        <Form className="custom-input">
          <FormGroup>
            <label>Select Product</label>
            <Select
              placeholder="Select Product"
              value={ProductDropdown.find(
                (item) => item.value === formik.values.product_id
              )}
              options={ProductDropdown}
              onChange={(selectedOption) =>
                formik.setFieldValue("product_id", selectedOption.value)
              }
            />
          </FormGroup>
          <FormGroup>
            <label>Plan name</label>
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Plan name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <label>Plan description</label>
            <Input
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Plan description"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <label>Plan Amount</label>
            <Input
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              placeholder="Plan Amount"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label>Plan interval</label>
            <div className="custom-plan-input">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plan_interval"
                  id="inlineRadio1"
                  value="day"
                  checked={formik.values.plan_interval === "day"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" for="inlineRadio1">
                  day
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plan_interval"
                  id="inlineRadio2"
                  value="week"
                  checked={formik.values.plan_interval === "week"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" for="inlineRadio2">
                  week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plan_interval"
                  id="inlineRadio3"
                  value="month"
                  checked={formik.values.plan_interval === "month"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" for="inlineRadio3">
                  month
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plan_interval"
                  id="inlineRadio4"
                  value="year"
                  checked={formik.values.plan_interval === "year"}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" for="inlineRadio4">
                  year
                </label>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <label>Plan interval count</label>
            <Input
              name="interval_count"
              value={formik.values.interval_count}
              onChange={formik.handleChange}
              placeholder="Plan interval count"
              type="number"
              onChange={formik.handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        {loadingPlan ? (
          <Button color="primary">Loading..</Button>
        ) : (
          <Button color="primary" onClick={formik.handleSubmit}>
            {isCreatePlan ? "Create" : "Save"}
          </Button>
        )}
      </ModalFooter>
    </React.Fragment>
  );
}
