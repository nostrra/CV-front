export const ETechnologyActionType = {
  CREATE: 'ADD_TECHNOLOGY',
  UPDATE: 'CHANGE_TECHNOLOGY',
  DELETE: 'REMOVE_TECHNOLOGY',
};

const technologyState = {
  name: '',
  type: '',
  allow: false,
};


export function technologyReducer(state = technologyState, action) {
  switch (action.type) {
    case ETechnologyActionType.CREATE:
      return action.payload;
    default:
      return state;
  }
}
