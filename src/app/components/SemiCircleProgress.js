import React, { useState, useEffect } from 'react';

const ProgressBar = ({ value }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(value);

    // When the percentage value changes, reset the animation by removing and re-adding the animation class
    const progressBar = document.querySelector('[role="progressbar"]');
    progressBar.classList.remove('progress-animation');
    setTimeout(() => {
      progressBar.classList.add('progress-animation');
    }, 10); // Delay added to ensure animation restarts
  }, [value]);

  return (
    <div role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{ '--value': percentage }}>
      <div className="progress-label">{percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
