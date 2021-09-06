import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
});

export const invoicesAPI = {
  getInvoices(invoices) {
    return instance.get(`invoices`)
  },
};