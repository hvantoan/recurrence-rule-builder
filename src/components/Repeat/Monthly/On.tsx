import React from "react";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import translateLabel from "../../../utils/translateLabel";
import { RepeatMonthlyOnProps } from "./On.types";

const RepeatMonthlyOn = ({ id, mode, on, hasMoreModes, handleChange, translations }: RepeatMonthlyOnProps) => {
  const isActive = mode === "on";

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && "opacity-50"}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on"
            value="on"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="col-sm-1">{translateLabel(translations, "repeat.monthly.on_day")}</div>

      <div className="col-sm-2">
        <select
          id={`${id}-day`}
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on a day"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RepeatMonthlyOn;
