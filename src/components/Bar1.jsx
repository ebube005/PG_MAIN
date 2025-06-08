import "./Bar1.css";

function Bar1() {
  const steps = [
    { number: 1, label: "Upload Audio" },
    { number: 2, label: "Target Word" },
    { number: 3, label: "Criteria" },
    { number: 4, label: "Results" },
  ];

  const currentStep = 1; // You can later make this dynamic with props or context

  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <div className="progress-segment" key={step.number}>
          <div
            className={`step-circle ${
              currentStep === step.number ? "active" : "inactive"
            }`}
          >
            {step.number}
          </div>
          <div
            className={`step-label ${
              currentStep === step.number ? "active" : ""
            }`}
          >
            {step.label}
          </div>
          {index !== steps.length - 1 && <div className="progress-line" />}
        </div>
      ))}
    </div>
  );
}

export default Bar1;
