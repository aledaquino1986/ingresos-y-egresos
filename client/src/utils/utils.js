const setCurrentState = (state, setStateFunction) => {
  setStateFunction(state);
};

export const handleSubmit = e => {
  e.preventDefault();

  alert("it works");
};

export default setCurrentState;
