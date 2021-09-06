import { invoicesAPI } from "../api/api";

const SET_INVOICES = "__invoise-managment/invoises/SET-INVOICES";

let initialState = {
  invoices: [],
};

const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        invoices: action.invoices,
      };
      
    default:
      return state;
  }
};

export const setInvoces = (invoices) => ({
  type: SET_INVOICES,
  invoices,
});



export const getInvoices = (invoices) => async (dispatch) => {

  const response = await invoicesAPI.getInvoices(invoices)
  if (response.status < 400) {
    dispatch(setInvoces(response.data));
  }
}

export default invoicesReducer;

