import React from "react";

const CustomStepper = ({ step }) => {
  const classes = !step
    ? "pag-step pag-step-2 active"
    : "pag-step pag-step-2 active checked";

  return (
    <div className="calculator-pagination mt-2">
      <div className="pag-step pag-step-1 active checked">
        <button className="step">
          <span className="number">1</span>
        </button>
        <span className="label">Destination</span>
      </div>
      <span className="step-dots "></span>
      <div className={classes}>
        <button className="step">
          <span className="number">2</span>
        </button>
        <span className="label">Vehicle</span>
      </div>
      <span className="step-dots"></span>
      <div className="pag-step">
        <button className="step">
          <span className="number">3</span>
        </button>
        <span className="label">Date</span>
      </div>
    </div>
  );
};

export default CustomStepper;
