import "./Bar4.css";

function Bar4() {
  const steps = [
    { number: 1, label: "Upload Audio" },
    { number: 2, label: "Target Word" },
    { number: 3, label: "Criteria" },
    { number: 4, label: "Results" },
  ];

  const currentStep = 4;

  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <div className="progress-segment" key={step.number}>
          <div
            className={`step-circle ${
              currentStep === step.number
                ? "active"
                : currentStep > step.number
                ? "completed"
                : "inactive"
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
          {index !== steps.length - 1 && (
            <div
              className={`progress-line ${
                currentStep > step.number ? "completed" : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Bar4;
