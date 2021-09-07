import React from "react";
import { reduxForm } from "redux-form";
import ActionForm from "../common/ActionForm/ActionForm";

const EditInvoiceBlock = (props) => {
  const onSubmit = (formData) => {
    let number = JSON.parse(formData.number);
    if (
      !props.invoicesNumbers.some((item) => item === number) ||
      number === props.currentInvoice.number
    ) {
      props
        .updateCurrentInvoice(
          props.currentInvoice.id,
          number,
          formData.date_created,
          formData.date_supplied,
          formData.comment
        )
        .then(() => {
          props.closeActionForm();
        });
    } else {
      console.log("bad number");
    }
  };
  // stopSubmit("addForm", {
  //   _error: "This number exists",
  // })

  return (
    <div>
      <h1>Edit Invoice</h1>
      <section>
        <ReduxActionForm
          closeActionForm={props.closeActionForm}
          initialValues={props.currentInvoice}
          onSubmit={onSubmit}
        />
      </section>
    </div>
  );
};

export default EditInvoiceBlock;

export const ReduxActionForm = reduxForm({
  form: "editForm",
})(ActionForm);
