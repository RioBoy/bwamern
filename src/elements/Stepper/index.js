import React, { useState } from 'react';

import propTypes from 'prop-types';

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [CurrentSep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0],
  );
  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(CurrentSep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep] + 1);
  }

  return <>{props.children(prevStep, nextStep, CurrentSep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
