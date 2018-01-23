import React from 'react';
import { connect } from 'react-redux';

const PatientForm = ({ dispatch }) => {
 let input;

 return (
   <div>
     <h3>Add A Patient</h3>
     <form
       onSubmit={ e => {
         e.preventDefault();
         dispatch({ type: 'ADD_PATIENT', todo: input.value })
         input.value = null;
       }}
     >
      <input ref={ n => input = n } />
     </form>
    </div>
  )
}

export default connect()(PatientForm);
