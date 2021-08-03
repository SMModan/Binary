import { Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePlan, getPlan, getProducts } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import EditPlanModal from "../components/Plan/EditPlanModal";

export default function Plan() {
  const dispatch = useDispatch();
  const planList = useSelector((state) => state.PlanReducer.planList);
  const loading = useSelector((state) => state.PlanReducer.loading);
  const [modal, setModal] = useState(false);
  const [plan, setPlan] = useState({});
  const [loadingPlan, setLoadingPlan] = useState(false);
  useEffect(() => {
    if (!modal) {
      setLoadingPlan(false);
      setPlan({});
    }
  }, [modal]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    if (!loadingPlan) {
      dispatch(getPlan());
    }
  }, [loadingPlan]);
  return (
    <div className="content">
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>Plan</th>
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
          {planList &&
            planList.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td className="text-center">
                  {" "}
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    onClick={() => {
                      setPlan(item);
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
                      setLoadingPlan(true);
                      dispatch(
                        deletePlan(undefined, item.id, setLoadingPlan, true)
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
      <EditPlanModal
        {...{ modal, setModal, plan, loadingPlan, setLoadingPlan }}
      />
      {loading && <div className="cover-spin" role="status" />}
    </div>
  );
}
