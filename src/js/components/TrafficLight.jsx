import React, { useState } from "react";
import "../../styles//index.css";

const COLORS = ["red", "orange", "green", "purple"];

export default function TrafficLight() {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);

  const handleSelect = (c) => () => setColor(c);

  const cycleOnce = () => {
    const activeColors = COLORS.filter((c) => c !== "purple" || hasPurple);
    const idx = activeColors.indexOf(color);
    const next = activeColors[(idx + 1) % activeColors.length];
    setColor(next);
  };

  const togglePurple = () => {
    setHasPurple((prev) => {
      const turningOn = !prev;
      if (!turningOn && color === "purple") {
        setColor("red");
      }
      return turningOn;
    });
  };

  return (
    <div className="traffic-container">
      <div className="traffic-body" role="group" aria-label="Traffic light">
        <button
          className={`light red ${color === "red" ? "active" : ""}`}
          onClick={handleSelect("red")}
          aria-pressed={color === "red"}
          title="Red"
        />
        <button
          className={`light orange ${color === "orange" ? "active" : ""}`}
          onClick={handleSelect("orange")}
          aria-pressed={color === "orange"}
          title="Orange"
        />
        <button
          className={`light green ${color === "green" ? "active" : ""}`}
          onClick={handleSelect("green")}
          aria-pressed={color === "green"}
          title="Green"
        />

        {hasPurple && (
          <button
            className={`light purple ${color === "purple" ? "active" : ""}`}
            onClick={handleSelect("purple")}
            aria-pressed={color === "purple"}
            title="Purple"
          />
        )}
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button
          className="cycle-btn"
          onClick={cycleOnce}
          aria-label="Cycle traffic light"
        >
          Cycle
        </button>

        <button
          className="cycle-btn"
          onClick={togglePurple}
          aria-pressed={hasPurple}
          aria-label={hasPurple ? "Remove purple light" : "Add purple light"}
        >
          {hasPurple ? "Remove Purple" : "Add Purple"}
        </button>
      </div>
    </div>
  );
}
