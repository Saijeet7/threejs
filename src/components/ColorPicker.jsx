import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#000000",
          "#ffffff",
          "#00ffff",
          "#d9d9d9",
          "#2d0101",
          "#f0651b",
          "#1f286a",
          "#4abadd",
          "#B6840D",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
