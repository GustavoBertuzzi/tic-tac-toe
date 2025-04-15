import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="btn btn-outline-dark square fw-bold fs-3"
      onClick={onSquareClick}
      style={{ width: "80px", height: "80px" }}
    >
      {value}
    </button>
  );
}
