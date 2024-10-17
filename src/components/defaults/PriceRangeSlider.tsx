// src/components/PriceRangeSlider.tsx

import React, { useState } from "react";
import { Naira } from "../svgs/extras";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue);
    setMinValue(value);
    onChange(value, maxValue);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue);
    setMaxValue(value);
    onChange(minValue, value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Naira />
          {minValue}
        </div>
        <div className="flex items-center">
          <Naira />
          {maxValue}
        </div>
      </div>
      <div className="flex justify-between">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="range-slider min-range"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="range-slider max-range"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
