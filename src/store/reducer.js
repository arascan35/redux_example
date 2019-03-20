import isEqual from "lodash/isEqual";
const initialState = {
  ageA: 21,
  ageB: 21,
  data: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  const newState = { ...state };
  if (action.type === "AGE_UP") newState.ageA += 10;
  else if (action.type === "AGE_DOWN") newState.ageA -= 10;
  else if (action.type === "PUSH")
    newState.data = newState.data.concat(action.data);
  else if (action.type === "POP")
    newState.data = newState.data.filter(d => !isEqual(d, action.obj));

  return newState;
};
export default reducer;
