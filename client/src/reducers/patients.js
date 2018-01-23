const patients = (state = [], action ) => {
  switch(action.type) {
    case 'PATIENTS':
      return action.patients
    case 'ADD_PATIENT':
      return [action.app, ...state]
    case 'UPDATE_PATIENT':
      return state.map( a => {
        if (a.id === action.patient.id)
          return action.patient
        return a
      })
    case 'DELETE_PATIENT':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default patients;