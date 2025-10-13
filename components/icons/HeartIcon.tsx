import React from "react";
import Svg, { Path } from "react-native-svg";

interface HeartIconProps {
  size?: number;
  color?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({
  size = 20,
  color = "#1C1C1E",
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.4652 16.6075C10.2102 16.6975 9.79024 16.6975 9.53524 16.6075C7.36024 15.865 2.50024 12.7675 2.50024 7.5175C2.50024 5.2 4.36774 3.325 6.67024 3.325C8.03524 3.325 9.24274 3.985 10.0002 5.005C10.7577 3.985 11.9727 3.325 13.3302 3.325C15.6327 3.325 17.5002 5.2 17.5002 7.5175C17.5002 12.7675 12.6402 15.865 10.4652 16.6075Z"
        stroke={color}
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HeartIcon;
