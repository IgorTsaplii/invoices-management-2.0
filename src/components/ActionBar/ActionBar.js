import React from "react";
import "../../App.css";

const ActionBar = (props) => {
  return (
    <section>
      <h2>Actions</h2>
      <button
        id="add_new_button"
        onClick={props.openAddInvoiceForm}
        className="big_blue_action_button"
      >
        Add new
      </button>
    </section>
  );
};

export default ActionBar;
