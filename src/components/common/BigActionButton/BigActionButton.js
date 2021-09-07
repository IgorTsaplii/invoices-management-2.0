import React from 'react'
import classes from "./BigActionButton.module.css"

const BigActionButton = (props) => {
  return (
    <button
        onClick={props.onclickFunction}
        className={classes.action_button}
      >{props.buttonText}
    </button>
  )
}

export default BigActionButton
