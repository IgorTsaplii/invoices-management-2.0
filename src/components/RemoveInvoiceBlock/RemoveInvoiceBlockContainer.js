import React, { Component } from "react";
import { connect } from "react-redux";
import { closeActionForm, removeCurrentInvoice } from "../../redux/invoices-reducer";
import RemoveInvoiceBlock from "./RemoveInvoiceBlock";

class RemoveInvoiceBlockContainer extends Component {
  render() {
    return (
      <RemoveInvoiceBlock
        closeActionForm={this.props.closeActionForm}
        currentInvoice={this.props.currentInvoice}
        removeCurrentInvoice={this.props.removeCurrentInvoice}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentInvoice: state.invoicesData.currentInvoice,
  };
};
export default connect(mapStateToProps, { closeActionForm, removeCurrentInvoice })(
  RemoveInvoiceBlockContainer
);
