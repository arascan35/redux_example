const initialState = {
  ageB: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "AGE_DOWN") newState.ageB -= 10;

  return newState;
};
export default reducer;
