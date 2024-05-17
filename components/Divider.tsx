import React from "react";
import { View } from "react-native";

interface DividerProps {
  width?: number;
  length?: number | string; // Add length prop for customization
  orientation?: "horizontal" | "vertical";
  color?: string;
  dividerStyle?: any;
}

const Divider: React.FC<DividerProps> = ({
  width = 1,
  length = "100%", // Default length is 100%
  orientation = "horizontal",
  color = "#DFE4EA",
  dividerStyle,
}) => {
  const dividerStyles = [
    { width: orientation === "horizontal" ? length : width },
    { height: orientation === "vertical" ? length : width },
    { backgroundColor: color },
    dividerStyle,
  ];

  return <View style={dividerStyles} className="px-14" />;
};

export default Divider;
