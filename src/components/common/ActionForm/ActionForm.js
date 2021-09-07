import React from "react";
import { Field } from "redux-form";
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from "../../../utils/validators/validators";
import BigActionButton from "../BigActionButton/BigActionButton";
import { Input, Textaria } from "../FormsControl/FormsControl";
import classes from "./ActionForms.module.css";

const ActionForm = (props) => {
  const maxLength10 = maxLengthCreator(10);
  const maxLength160 = maxLengthCreator(160);
  const minLength3 = minLengthCreator(3);

  return (
    <form onSubmit={props.handleSubmit} className={classes.action_form}>
      <div className={classes.input_wrapper}>
        <label>
          Number :
          <Field
            type="text"
            name="number"
            component={Input}
            validate={[required, maxLength10, minLength3]}
            placeholder="Enter the number"
          />
        </label>
        <label>
          Invoice Date :
          <Field
            type="date"
            name="date_created"
            component={Input}
            validate={[required]}
          />
        </label>
        <label>
          Suplly Date :
          <Field
            type="date"
            name="date_supplied"
            component={Input}
            validate={[required]}
          />
        </label>
        <label className={classes.comment_input_block}>
          Comment :
          <Field
            name="comment"
            component={Textaria}
            validate={[maxLength160]}
          />
        </label>
        <button
          className={classes.close_action_form_button}
          onClick={props.closeActionForm}
        ></button>
      </div>
      <p className={classes.form_error}>{props.error}</p>
      <div className={classes.save_button}>
        <BigActionButton buttonText="Save" />
      </div>
    </form>
  );
};

export default ActionForm;
