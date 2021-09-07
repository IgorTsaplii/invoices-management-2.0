import React from "react";
import classes from "../InvoiceList.module.css";

const Invoice = (props) => {
  return (
    <div className={classes.invoice_list_item}>
      <p>{props.date_created}</p>
      <p className={classes.number}>{props.number}</p>
      <p>{props.date_supplied}</p>
      <p>{props.comment}</p>
      <div className={classes.edit_buttons_block}>
        <button onClick={props.openEditFormWithData}>Edit</button>
        <button onClick={props.openEditFormWithData}>Remove</button>
      </div>
    </div>
  );
};

export default Invoice;
