import { Axios } from "axios-observable";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Request-ID": 124,
  "X-Country-Code": "BD",
  "X-Client-Name": "CRM",
  "X-Client-Version": 123,
};

export const ThanosAxiosIntance = Axios.create({
  baseURL: "https://ma-stg-api.appxify.com/api/v1",
  headers,
  timeout: 3000,
});
