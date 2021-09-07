import React from "react";
import "../../App.css";
import BigActionButton from "../common/BigActionButton/BigActionButton";

const ActionBar = (props) => {
  return (
    <section>
      <h2>Actions</h2>
      <div className="action_button">
        <BigActionButton buttonText="Add new" onclickFunction={props.openAddInvoiceForm}/>
      </div>
    </section>
  );
};

export default ActionBar;
