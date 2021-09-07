import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ActionBarConteiner from "./components/ActionBar/ActionBarConteiner";
import AddInvoiceBlockContainer from "./components/AddInvoiceBlock/AddInvoiceBlockContainer";
import EditInvoiceBlockContainer from "./components/EditInvoiceBlock/EditInvoiceBlockContainer";
import InvoicesListContainer from "./components/InvoicesList/InvoicesListContainer";
import RemoveInvoiceBlockContainer from "./components/RemoveInvoiceBlock/RemoveInvoiceBlockContainer";


class App extends React.Component {
  

  render() {
    if(this.props.isOpenAddBlock){
      return <AddInvoiceBlockContainer />
    }

    if(this.props.isOpenEditBlock){
      return <EditInvoiceBlockContainer />
    }

    if(this.props.isOpenRemoveBlock){
      return <RemoveInvoiceBlockContainer />
    }
  return (
    <div className="App">
      <h1>Invoices</h1>
      <ActionBarConteiner />
      <InvoicesListContainer />
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  isOpenAddBlock: state.invoicesData.isOpenAddBlock,
  isOpenEditBlock: state.invoicesData.isOpenEditBlock,
  isOpenRemoveBlock: state.invoicesData.isOpenRemoveBlock
});

export default connect(mapStateToProps, { })(App);
