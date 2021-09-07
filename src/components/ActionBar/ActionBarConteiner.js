import React, { Component } from "react";
import { connect } from "react-redux";
import ActionBar from "./ActionBar";
import { openAddInvoiceForm } from "../../redux/invoices-reducer";

class ActionBarConteiner extends Component {
  render() {
    return (
      <ActionBar
        openAddInvoiceForm={this.props.openAddInvoiceForm}
        isOpenAddBlock={this.props.isOpenAddBlock}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpenAddBlock: state.invoicesData.isOpenAddBlock,
  };
};

export default connect(mapStateToProps, {
  openAddInvoiceForm,
})(ActionBarConteiner);
