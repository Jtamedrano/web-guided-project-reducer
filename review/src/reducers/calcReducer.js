const reducer = (state, action) => {
  switch (action.type) {
    case 'TYPE_INPUT':
      return { ...state, inputValue: `${action.payload}` };
    case 'ADD':
      return {
        ...state,
        currentValue: state.currentValue + parseInt(action.payload),
        lastAction: action.type,
      };
    case 'SUBTRACT':
      return {
        ...state,
        currentValue: state.currentValue - parseInt(action.payload),
        lastAction: action.type,
      };
    case 'CLEAR':
      return { ...state, currentValue: 0 };
    case 'ADD_TO_MEMORY':
      return { ...state, memory: state.currentValue };
    case 'EQUALS':
      return { ...state, inputValue: state.currentValue };
    default:
      return state;
  }
};

export default reducer;
