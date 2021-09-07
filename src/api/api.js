import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
});

export const invoicesAPI = {
  getInvoices(invoices) {
    return instance.get(`invoices`);
  },

  saveNewInvoices(id, number, date_created, date_supplied, comment) {
    return instance.post(`invoices`, {
      id,
      number,
      date_created,
      date_supplied,
      comment,
    });
  },

  updateCurrentInvoice(id, number, date_created, date_supplied, comment) {
    return instance.put(`invoices/${id}`, {
      // id,
      number,
      date_created,
      date_supplied,
      comment,
    });
  },

  removeCurrentInvoice(id) {
    return instance.delete(`invoices/${id}`);
  },
};
