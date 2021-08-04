import { Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getCoupon } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import EditCouponModal from "../components/Coupon/EditCouponModal";

export default function Coupon() {
  const dispatch = useDispatch();
  const couponList = useSelector((state) => state.CouponReducer.couponList);
  const loading = useSelector((state) => state.CouponReducer.loading);
  const [modal, setModal] = useState(false);
  const [loadingCoupon, setLoadingCoupon] = useState(false);
  const [coupon, setCoupon] = useState({});
  useEffect(() => {
    if (!modal) {
      setLoadingCoupon(false);
      setCoupon({});
    }
  }, [modal]);
  useEffect(() => {
    if (!loadingCoupon) {
      dispatch(getCoupon());
    }
  }, [loadingCoupon]);

  return (
    <div className="content">
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>Coupon</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
            <th className="text-center">
              <FontAwesomeIcon
                className="cursor-pointer"
                size="2x"
                onClick={() => {
                  setModal(true);
                }}
                icon={faPlus}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {couponList &&
            couponList.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td className="text-center">
                  {" "}
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    onClick={() => {
                      setCoupon(item);
                      setModal(true);
                    }}
                    size="1x"
                    icon={faPen}
                  />
                </td>
                <td className="text-center">
                  {" "}
                  <FontAwesomeIcon
                    onClick={() => {
                      setLoadingCoupon(true);
                      dispatch(
                        deleteCoupon(
                          undefined,
                          item.id,
                          setLoadingCoupon,
                          true
                        )
                      );
                    }}
                    className="cursor-pointer"
                    size="1x"
                    icon={faTrash}
                  />
                </td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </Table>
      <EditCouponModal
        {...{ modal, setModal, coupon, loadingCoupon, setLoadingCoupon }}
      />
      {loading && <div className="cover-spin" role="status" />}
    </div>
  );
}