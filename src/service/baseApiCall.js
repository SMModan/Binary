import { getAPIHeader } from "../utils";
import axios from "./axiosConfig";

export const METHOD = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

export const apiCall = (
  endpoint,
  params = {},
  onSuccess,
  onFailure,
  method = METHOD.GET,
  DyanamicConfig = {
    addAuthrize: false,
    customParams: {},
  }
) => {
  console.log(endpoint, params, onSuccess, onFailure, method, DyanamicConfig);
  let request = {};
  switch (method) {
    case METHOD.POST:
      request = axios.post(
        endpoint,
        params,
        DyanamicConfig.addAuthrize ? getAPIHeader() : DyanamicConfig.customParams
      );
      break;
    case METHOD.GET:
      request = axios.get(
        endpoint,
        DyanamicConfig.addAuthrize ? getAPIHeader() : DyanamicConfig.customParams
      );
      break;
    case METHOD.DELETE:
      request = axios.delete(
        endpoint,
        DyanamicConfig.addAuthrize ? getAPIHeader() : DyanamicConfig.customParams
      );
      break;
    case METHOD.PUT:
      request = axios.put(
        endpoint,
        params,
        DyanamicConfig.addAuthrize ? getAPIHeader() : DyanamicConfig.customParams
      );
      break;
    case METHOD.PATCH:
      request = axios.patch(
        endpoint,
        params,
        DyanamicConfig.addAuthrize ? getAPIHeader() : DyanamicConfig.customParams
      );
      break;
  }
  request
    .then((response) => {
      if (
        response.status == 200 ||
        response.status == 201 ||
        response.status == 204 ||
        response.data
      ) {
        onSuccess(response.data);
      } else {
        onFailure("Something went wrong");
      }
    })
    .catch((error) => {
      console.log(error);
      if (error && error.response) {
        switch (error.response.status) {
          case 401:
            onFailure(
              error.response.data && typeof error.response.data.detail
                ? error.response.data.detail
                : "Session expired"
            );
            break;

          default:
            onFailure(
              error.response.data ? error.response.data : "Something went wrong"
            );
            break;
        }
      } else onFailure && onFailure("Something went wrong");
    });
};
