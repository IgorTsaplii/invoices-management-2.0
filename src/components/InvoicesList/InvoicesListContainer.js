import React, { Component } from "react";
import { connect } from "react-redux";
import {getInvoices} from "../../redux/invoices-reducer"
import InvoicesList from "./InvoicesList";

class InvoicesListContainer extends Component {
  componentDidMount() {
this.props.getInvoices()
  }

  render() {
    return <InvoicesList invoices={this.props.invoices}/>;
  }
}


const mapStateToProps = (state) => {
  return {
    invoices: state.invoicesData.invoices, 
    name: state.invoicesData.name
  };
};

export default connect(mapStateToProps, {
  getInvoices,
})(InvoicesListContainer);
