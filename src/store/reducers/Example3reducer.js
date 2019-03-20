import isEqual from "lodash/isEqual";
import dotProp from "dot-prop-immutable";
const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  if (action.type === "PUSH") newState.data = newState.data.concat(action.data);
  else if (action.type === "PUSH_DIFF")
    newState.data = [{ name: "13070006021" }];
  else if (action.type === "POP")
    newState.data = newState.data.filter(d => !isEqual(d, action.obj));
  else if (action.type === "OnChange") {
    newState = dotProp.set(newState, `data.${action.index}.name`, action.value);

    // const index = action.index;
    // const news = [...state.data];
    // news[index] = { ...state[index], name: action.value };
    // newState.data = news;
    /*----------------------------------------------------------*/
    // newState.data = state.data.map((item, index) => {
    //   if (index === action.index) {
    //     return { ...item, name: action.value };
    //   }
    //   return item;
    // });
  }
  return newState;
};
export default reducer;
