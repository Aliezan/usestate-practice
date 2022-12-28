import React, { useState } from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

function ToggleLampFunc() {
  const [lamp, setLamp] = useState('off');

  const toggleLamp = () => {
    setLamp((prevLamp) => {
      return prevLamp === 'off' ? 'on' : 'off';
    });
  };

  return (
    <div className={lamp}>
      <button onClick={toggleLamp}>{lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}</button>
      <h3>hooks keren!</h3>
    </div>
  );
}

export default ToggleLampFunc;
