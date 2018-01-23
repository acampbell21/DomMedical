import axios from 'axios';

export const getPatients = () => {
  return (dispatch) => {
    axios.get('/api/patients')
      .then( res => dispatch({ type: 'PATIENTS', patients: res.data }) )
  }
}

export const addPatient = (patient) => {
  return (dispatch) => {
    axios.post('/api/patients', { patient } )
     .then( res => dispatch({ type: 'ADD_PATIENT', patient: res.data }) )
  }
}

export const updatePatient = (patient) => {
  return (dispatch) => {
    axios.put(`/api/patients/${patient.id}`, { patient } )
      .then( res => dispatch({ type: 'UPDATE_PATIENT', patient: res.data }) )
  }
}

export const deletePatient = (id) => {
  return (dispatch) => {
    axios.delete(`/api/patients/${id}`)
      .then( () => dispatch({ type: 'DELETE_PATIENT', id }) )
  }
}
