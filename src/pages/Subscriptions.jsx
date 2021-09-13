import { Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscription } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import moment  from "moment";

export default (function Subscription() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.CouponReducer.loading);
  const subscriptionList = useSelector((state) => state.SubscripionsReducer.subscriptionList);
    
  useEffect(() => {
      dispatch(getSubscription());

  }, []);

  if (loading)
    return (
      <div className="container">
        <div className="cover-spin" role="status" />
      </div>
    );

  return (
    <div className="content s-auto">
{subscriptionList && subscriptionList.length  ? (
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th className="text-center">Customer Name</th>
              <th className="text-center">Plan Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Start</th>
              <th className="text-center">End</th>
              <th className="text-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  size="2x"
                  icon={faShare}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {subscriptionList &&
              subscriptionList.map((item) => (
                <tr>
                  <td className="text-center">{item.customer.name}</td>
                  <td className="text-center">{item.plan.name}</td>
                  <td className="text-center">{item.status}</td>
                  <td className="text-center">{moment.unix(item.subscription_start).format('DD/MM/YYYY')}</td>
                  <td className="text-center">{moment.unix(item.subscription_end).format("DD/MM/YYYY")}</td>

                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <div>
          <h3 className="d-inline">No Subscription Found</h3>
        </div>
      )}
    </div>
  );
});
