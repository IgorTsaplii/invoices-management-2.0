import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getInvoices,
  openEditInvoiceForm,
  openRemoveInvoiceBlock,
  setCurrentInvoice,
} from "../../redux/invoices-reducer";
import InvoicesList from "./InvoicesList";

class InvoicesListContainer extends Component {
  componentDidMount() {
    this.props.getInvoices();
  }

  render() {
    return (
      <InvoicesList
        invoices={this.props.invoices}
        openEditInvoiceForm={this.props.openEditInvoiceForm}
        openRemoveInvoiceBlock={this.props.openRemoveInvoiceBlock}
        setCurrentInvoice={this.props.setCurrentInvoice}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invoices: state.invoicesData.invoices,
  };
};

export default connect(mapStateToProps, {
  getInvoices,
  openEditInvoiceForm,
  openRemoveInvoiceBlock,
  setCurrentInvoice,
})(InvoicesListContainer);
