const rootReducer = (state: any, action: any) => {
  switch (action.type.split('_', 1)[0]) {
    case 'MAIN':
      break;
    case 'USER':
      break;
    default:
      return state;
  }
};

export default rootReducer;
