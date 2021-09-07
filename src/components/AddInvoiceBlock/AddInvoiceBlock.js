import React from "react";
import { reduxForm} from "redux-form";
import ActionForm from "../common/ActionForm/ActionForm";

const AddInvoiceBlock = (props) => {
  const onSubmit = (formData) => {
    let number = JSON.parse(formData.number);
    if (!props.invoicesNumbers.some((item) => item === number)) {
      props
        .saveNewInvoice(
          props.newId,
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
      // stopSubmit("addForm", {
      //   _error: "This number exists",
      // })
    }
  };

  return (
    <div>
      <h1>Create Invoice</h1>
      <section>
        <ReduxActionForm
          closeActionForm={props.closeActionForm}
          onSubmit={onSubmit}
        />
      </section>
    </div>
  );
};

export default AddInvoiceBlock;

export const ReduxActionForm = reduxForm({
  form: "addForm",
})(ActionForm);
