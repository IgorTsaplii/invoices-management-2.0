import { invoicesAPI } from "../api/api";

const SET_INVOICES = "__invoise-managment/invoises/SET-INVOICES";
const OPEN_ADD_INVOICE_FORM =
  "__invoise-managment/invoises/OPEN-ADD-INVOICE-FORM";
const OPEN_EDIT_INVOICE_FORM =
  "__invoise-managment/invoises/OPEN-EDIT-INVOICE-FORM";
const OPEN_REMOVE_INVOICE_BLOCK =
  "__invoise-managment/invoises/OPEN-REMOVE-INVOICE-BLOCK";
const CLOSE_ACTION_FORM = "__invoise-managment/invoises/CLOSE-ACTION-FORM";
const GET_INVOICES_NUMBERS =
  "__invoise-managment/invoises/GET-INVOICES-NUMBERS";
const GET_INVOICES_ID = "__invoise-managment/invoises/GET-INVOICES-ID";
const SET_CURRENT_INVOICE = "__invoise-managment/invoises/SET-CURRENT-INVOICE";

let initialState = {
  invoices: [],
  isOpenAddBlock: false,
  isOpenEditBlock: false,
  isOpenRemoveBlock: false,
  invoicesNumbers: [],
  invoicesId: [],
  currentInvoice: null,
};

const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        invoices: action.invoices,
      };

    case OPEN_ADD_INVOICE_FORM:
      return {
        ...state,
        isOpenAddBlock: true,
      };

    case OPEN_EDIT_INVOICE_FORM:
      return {
        ...state,
        isOpenEditBlock: true,
      };

    case OPEN_REMOVE_INVOICE_BLOCK:
      return {
        ...state,
        isOpenRemoveBlock: true,
      };

    case CLOSE_ACTION_FORM:
      return {
        ...state,
        isOpenAddBlock: false,
        isOpenEditBlock: false,
        isOpenRemoveBlock: false,
      };

    case GET_INVOICES_NUMBERS:
      return {
        ...state,
        invoicesNumbers: action.invoicesNumbers,
      };

    case GET_INVOICES_ID:
      return {
        ...state,
        invoicesId: action.invoicesId,
      };

    case SET_CURRENT_INVOICE:
      return {
        ...state,
        currentInvoice: action.currentInvoice,
      };

    default:
      return state;
  }
};

export const setInvoces = (invoices) => ({
  type: SET_INVOICES,
  invoices,
});

export const setCurrentInvoice = (currentInvoice) => ({
  type: SET_CURRENT_INVOICE,
  currentInvoice,
});

export const openAddInvoiceForm = (isOpenAddBlock) => ({
  type: OPEN_ADD_INVOICE_FORM,
  isOpenAddBlock,
});

export const openEditInvoiceForm = (isOpenEditBlock) => ({
  type: OPEN_EDIT_INVOICE_FORM,
  isOpenEditBlock,
});

export const openRemoveInvoiceBlock = (isOpenRemoveBlock) => ({
  type: OPEN_REMOVE_INVOICE_BLOCK,
  isOpenRemoveBlock,
});

export const closeActionForm = (
  isOpenAddBlock,
  isOpenEditBlock,
  isOpenRemoveBlock
) => ({
  type: CLOSE_ACTION_FORM,
  isOpenAddBlock,
  isOpenEditBlock,
  isOpenRemoveBlock,
});

export const getInvocesNumbers = (invoicesNumbers) => ({
  type: GET_INVOICES_NUMBERS,
  invoicesNumbers,
});

export const getInvocesId = (invoicesId) => ({
  type: GET_INVOICES_ID,
  invoicesId,
});

export const getInvoices = (invoices) => async (dispatch) => {
  const response = await invoicesAPI.getInvoices(invoices);
  if (response.status < 400) {
    dispatch(setInvoces(response.data));
    let invoicesNumbers = response.data.map((item) => {
      return item.number;
    });
    dispatch(getInvocesNumbers(invoicesNumbers));
    let InvocesId = response.data.map((item) => {
      return item.id;
    });
    dispatch(getInvocesId(InvocesId));
  }
};

export const saveNewInvoice =
  (id, number, date_created, date_supplied, comment) => async (dispatch) => {
    await invoicesAPI.saveNewInvoices(
      id,
      number,
      date_created,
      date_supplied,
      comment
    );
  };

export const updateCurrentInvoice =
  (id, number, date_created, date_supplied, comment) => async (dispatch) => {
    await invoicesAPI.updateCurrentInvoice(
      id,
      number,
      date_created,
      date_supplied,
      comment
    );
  };

export const removeCurrentInvoice = (id) => async (dispatch) => {
  await invoicesAPI.removeCurrentInvoice(id);
};

export default invoicesReducer;
