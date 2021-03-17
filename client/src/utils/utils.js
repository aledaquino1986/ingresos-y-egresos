export const handleSubmit = e => {
  e.preventDefault();

  alert("it works");
};

export const today = new Date(Date.now()).toLocaleDateString();

export default handleSubmit;
