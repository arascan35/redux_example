export const ageUpAsync = val => {
  return { type: "AGE_UP", value: val };
};

export const ageUp = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      val += 50;
      dispatch(ageUpAsync(val));
    }, 2000);
  };
};
export const ageDown = val => {
  return { type: "AGE_DOWN", value: val };
};

export const loading = () => {
  return {
    type: "LOADING"
  };
};
