import React, { Component } from "react";
import { connect } from "react-redux";
import { closeActionForm, updateCurrentInvoice } from "../../redux/invoices-reducer";
import EditInvoiceBlock from "./EditInvoiceBlock";

class EditInvoiceBlockContainer extends Component {
  render() {
    return (
      <EditInvoiceBlock
        closeActionForm={this.props.closeActionForm}
        currentInvoice={this.props.currentInvoice}
        invoices={this.props.invoices}
        updateCurrentInvoice={this.props.updateCurrentInvoice}
        invoicesNumbers={this.props.invoicesNumbers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentInvoice: state.invoicesData.currentInvoice,
    invoices: state.invoicesData.invoices,
    invoicesNumbers: state.invoicesData.invoicesNumbers,
  };
};
export default connect(mapStateToProps, { closeActionForm, updateCurrentInvoice })(
  EditInvoiceBlockContainer
);
