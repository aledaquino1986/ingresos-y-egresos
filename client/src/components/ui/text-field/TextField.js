import React from "react";

const TextField = ({
  label,
  placeHolder,
  type = "text",
  onChange,
  value,
  onBlur = () => {},
  onFocus = () => {}
}) => {
  const id = label
    .toLowerCase()
    .split(" ")
    .map(word => word.replace(/[^a-z]/g, ""))
    .join("-");
  return (
    <div className="form__input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};

export default TextField;
