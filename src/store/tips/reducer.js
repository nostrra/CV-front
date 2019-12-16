export const ETipActionType = {
  CREATE: 'ADD_TIP',
  UPDATE: 'CHANGE_TIP',
  DELETE: 'REMOVE_TIP',
};

const tipState = {
  value: '',
};


export function tipsReducer(state = tipState, action) {
  switch (action.type) {
    case ETipActionType.CREATE:
      return action.payload;
    default:
      return state;
  }
}
