import React from "react";

const Contador = ({ segundos }) => {
  const digits = segundos.toString().padStart(6, "0").split("");

  return (
    <div className="d-flex bg-dark text-white p-3 justify-content-center">
      <div className="mx-2 fs-1">
        <i className="fa-regular fa-clock"></i>
      </div>

      {digits.map((digit, index) => (
        <div key={index} className="mx-2 fs-1">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default Contador;