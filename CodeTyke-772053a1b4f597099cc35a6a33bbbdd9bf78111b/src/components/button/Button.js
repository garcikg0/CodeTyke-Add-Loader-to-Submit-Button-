import React from 'react';

import './Styles.scss';

const Button = (props) => {
  return (
    <>
    <div className={"submitButton"} onClick={props.handleSubmit} >
      {props.label}

        {props.showLoader ? <div className="loading-circle"></div> : <div></div>}
        
    </div>
    </>
  )
}

export default Button;