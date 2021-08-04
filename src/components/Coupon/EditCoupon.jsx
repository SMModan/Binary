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
import { CreateCouponSchema } from "../../validationScrema/coupon";
import { createCoupon, getCoupon } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

export default function EditCoupon({
  coupon = {},
  setModal,
  isCreateCoupon,
  loadingCoupon,
  setLoadingCoupon,
}) {
  const dispatch = useDispatch();
  const [offType, setOffType] = useState(
    coupon.percent_off ? "percentage" : "amount"
  );
  const formik = useFormik({
    initialValues: {
      name: coupon.name,
      code: coupon.code,
      duration: coupon.duration,
      amount_off: coupon.amount_off || coupon.percent_off,
    },
    // validationSchema: CreateCouponSchema,
    onSubmit: (values) => {
      const keyOff = offType === "amount" ? "amount_off" : "percent_off";
      let payload = { ...values };
      delete payload.amount_off;
      payload = { ...payload, [keyOff]: values.amount_off };
      // console.log(payload);
      setLoadingCoupon(true);
      dispatch(createCoupon(payload, coupon.id || 0, setModal));
      // formik.resetForm();
    },
    enableReinitialize: true,
  });
  return (
    <React.Fragment>
      <ModalBody>
        <Form className="custom-input">
          <FormGroup>
            <label>Coupon name</label>
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Coupon name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <label>Coupon code</label>
            <Input
              name="code"
              value={formik.values.code}
              onChange={formik.handleChange}
              placeholder="Coupon code"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <label>Coupon duration</label>
            <Input
              name="duration"
              value={formik.values.duration}
              onChange={formik.handleChange}
              placeholder="Coupon duration"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <label>Discount</label>
            <div className="custom-plan-input">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plan_interval"
                  id="inlineRadio1"
                  value="amount"
                  checked={offType === "amount"}
                  onChange={() => setOffType("amount")}
                />
                <label className="form-check-label" for="inlineRadio1">
                  amount
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="plan_interval"
                  id="inlineRadio2"
                  value="percentage"
                  checked={offType === "percentage"}
                  onChange={() => setOffType("percentage")}
                />
                <label className="form-check-label" for="inlineRadio2">
                  percentage
                </label>
              </div>
            </div>
            <Input
              name="amount_off"
              value={formik.values.amount_off}
              onChange={formik.handleChange}
              placeholder={`Coupon off ${offType} `}
              type="number"
              onChange={formik.handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        {loadingCoupon ? (
          <Button color="primary">Loading..</Button>
        ) : (
          <Button color="primary" onClick={formik.handleSubmit}>
            {isCreateCoupon ? "Create" : "Save"}
          </Button>
        )}
      </ModalFooter>
    </React.Fragment>
  );
}
