import React from "react";
import { reduxForm } from "redux-form";
import ActionForm from "../common/ActionForm/ActionForm";

const EditInvoiceBlock = (props) => {
  let currentUser = props.invoices.find(
    (item) => item.id === props.currentUserId
  );
  console.log(currentUser);

  const onSubmit = (formData) => {
    let number = JSON.parse(formData.number);
    if (
      !props.invoicesNumbers.some((item) => item === number) ||
      number === currentUser.number
    ) {
      props
        .updateCurrentInvoice(
          props.currentUserId,
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
          initialValues={currentUser}
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
