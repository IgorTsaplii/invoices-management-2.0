import React from "react";
import classes from "./RemoveInvoiceBlock.module.css";

const RemoveInvoiceBlock = (props) => {
  const removeInvoice = () => {
    props.removeCurrentInvoice(props.currentInvoice.id)
    .then(() => {
      props.closeActionForm();
    });
  }

  return (
    <div className={classes.remove_invoice_block}>
      <section className={classes.massage_block}>
        <p>{`Do you want to delete invoice ${props.currentInvoice.number} ?`}</p>
        <div></div>
        <button className={classes.confirmation_button} onClick={removeInvoice}>Yes</button>
        <button className={classes.cancel_button} onClick={props.closeActionForm}>No</button>
      </section>
    </div>
  );
};

export default RemoveInvoiceBlock;
