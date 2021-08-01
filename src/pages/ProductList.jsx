import { Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action/ProductsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import EditProductModal from "../components/Product/EditProductModal";

export default function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.ProductsReducer.productList);
  const loading = useSelector((state) => state.ProductsReducer.loading);
  const [modal, setModal] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (!modal) {
      dispatch(getProducts());
      setProduct({});
      setLoadingProduct(false);
    }
  }, [modal]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="content">
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>Product</th>
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
          {productList &&
            productList.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td className="text-center">
                  {" "}
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    onClick={() => {
                      setProduct(item);
                      setModal(true);
                    }}
                    size="1x"
                    icon={faPen}
                  />
                </td>
                <td className="text-center">
                  {" "}
                  <FontAwesomeIcon
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
      <EditProductModal
        {...{ modal, setModal, product, loadingProduct, setLoadingProduct }}
      />
      {loading && <div className="cover-spin" role="status" />}
    </div>
  );
}
