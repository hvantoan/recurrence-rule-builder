import React from "react";

import { DAYS } from "../../../constants/index";
import translateLabel from "../../../utils/translateLabel";
import { RepeatMonthlyOnTheProps } from "./OnThe.types";

const RepeatMonthlyOnThe = ({ id, mode, onThe, hasMoreModes, handleChange, translations }: RepeatMonthlyOnTheProps) => {
  const isActive = mode === "on the";

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && "opacity-50"}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on the"
            value="on the"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="col-sm-1">{translateLabel(translations, "repeat.monthly.on_the")}</div>

      <div className="col-sm-2">
        <select
          id={`${id}-which`}
          name="repeat.monthly.onThe.which"
          aria-label="Repeat monthly on the which"
          className="form-control"
          value={onThe.which}
          disabled={!isActive}
          onChange={handleChange}
        >
          <option value="First">{translateLabel(translations, "numerals.first")}</option>
          <option value="Second">{translateLabel(translations, "numerals.second")}</option>
          <option value="Third">{translateLabel(translations, "numerals.third")}</option>
          <option value="Fourth">{translateLabel(translations, "numerals.fourth")}</option>
          <option value="Last">{translateLabel(translations, "numerals.last")}</option>
        </select>
      </div>

      <div className="col-sm-3">
        <select
          id={`${id}-day`}
          name="repeat.monthly.onThe.day"
          aria-label="Repeat monthly on the day"
          className="form-control"
          value={onThe.day}
          disabled={!isActive}
          onChange={handleChange}
        >
          {DAYS.map((day) => (
            <option key={day} value={day}>
              {translateLabel(translations, `days.${day.toLowerCase()}`)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RepeatMonthlyOnThe;
