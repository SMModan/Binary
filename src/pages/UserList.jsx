import SidebarAdminLayout from "../components/SidebarAdminLayout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action/ProductsAction";

export default function UserList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.ProductsReducer.productList);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div class="content mt-5 mb-3 pt-5">
      <div class="row">
        {productList.map((item) => (
          <div class="col-md-4 my-2">
            <div class="card p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon">
                    {" "}
                    <i class="bx bxl-mailchimp"></i>{" "}
                  </div>
                  <div class="ms-2 c-details">
                    {/* <h6 class="mb-0">Mailchimp</h6> <span>1 days ago</span> */}
                  </div>
                </div>
                <div class="badge"> {/* <span>Design</span> */}</div>
              </div>
              <div class="mt-5">
                <h3 class="heading">{item.title}</h3>
                <div class="mt-5">
                  {/* <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div> */}
                  <div class="mt-3">
                    {/* <span class="text1">
                      32 Applied <span class="text2">of 50 capacity</span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
