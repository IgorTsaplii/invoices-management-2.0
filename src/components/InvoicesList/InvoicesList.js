import React from "react";
import Invoice from "./Invoice/Invoice";
import classes from "./InvoiceList.module.css";

const InvoicesList = (props) => {
  const invoicesList = props.invoices.map((item) => {
    const openEditFormWithData = () => {
      props.openEditInvoiceForm()
      props.setCurrentInvoice(item)
    }

    const removeInvoiceWithData = () => {
      props.openRemoveInvoiceBlock()
      props.setCurrentInvoice(item)
    }

    return (
      <Invoice
        number={item.number}
        date_created={item.date_created}
        date_supplied={item.date_supplied}
        comment={item.comment}
        id={item.id}
        key={item.id}
        openEditFormWithData={openEditFormWithData} 
        removeInvoiceWithData={removeInvoiceWithData}
         
      />
    );
  });

  return (
    <section className={classes.invoice_list}>
      <h2>Invoices</h2>
      <div className={classes.invoice_list_header}>
        <p>Create</p>
        <p>No</p>
        <p>Supply</p>
        <p>Comment</p>
      </div>
      {invoicesList}
    </section>
  );
};

export default InvoicesList;
