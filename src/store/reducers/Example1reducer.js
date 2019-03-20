const initialState = {
  ageA: 21,
  loading: false
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "AGE_UP") {
    newState.ageA += action.value;
    newState.loading = false;
  } else if (action.type === "LOADING") newState.loading = true;
  return newState;
};
export default reducer;
