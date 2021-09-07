import React, { Component } from "react";
import { connect } from "react-redux";
import { getInvoices, openEditInvoiceForm, setCurrentUserId } from "../../redux/invoices-reducer";
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
        setCurrentUserId={this.props.setCurrentUserId}
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
  setCurrentUserId
})(InvoicesListContainer);
