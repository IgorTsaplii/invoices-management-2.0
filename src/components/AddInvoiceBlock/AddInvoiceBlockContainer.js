import React, { Component } from "react";
import { connect } from "react-redux";
import AddInvoiceBlock from "./AddInvoiceBlock";
import { closeActionForm, saveNewInvoice } from "../../redux/invoices-reducer";

class AddInvoiceBlockContainer extends Component {
  idCreator() {
    let invoicesIdArray = this.props.invoicesId;
    let newInvoiceId = "";
    let newId = "";
    function makeId() {
      const possible = "abcdefghijklmnopqrstuvwxyz0123456789";
      newId = "";
      for (let i = 0; i < 24; i++)
        newId += possible.charAt(Math.floor(Math.random() * possible.length));

      return newId;
    }
    makeId();
    if (invoicesIdArray.some((id) => newId === id)) {
      makeId();
    } else {
      newInvoiceId = newId;
      return newInvoiceId;
    }
  }

  render() {
    return (
      <AddInvoiceBlock
        closeActionForm={this.props.closeActionForm}
        saveNewInvoice={this.props.saveNewInvoice}
        newId={this.idCreator()}
        invoicesNumbers={this.props.invoicesNumbers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invoicesId: state.invoicesData.invoicesId,
    invoicesNumbers: state.invoicesData.invoicesNumbers,
  };
};
export default connect(mapStateToProps, { closeActionForm, saveNewInvoice })(
  AddInvoiceBlockContainer
);
