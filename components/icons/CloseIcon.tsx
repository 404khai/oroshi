import React from "react";
import Svg, { Path } from "react-native-svg";

interface CloseIconProps {
  size?: number;
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  size = 20,
  color = "#1C1C1E",
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.9999 16L3.99988 4M15.9999 4L3.99988 16"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
