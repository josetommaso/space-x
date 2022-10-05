import React from "react";

export const Button = ({ classes, label, onClick }) => {
  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};
