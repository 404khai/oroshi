import React from "react";
import Svg, { Line, Path } from "react-native-svg";

export function MenuIcon({ focused }: { focused: boolean }) {
  const strokeColor = focused ? "#FF593C" : "#7B7879";

  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Line
        x1="5.45"
        y1="21.25"
        x2="5.45"
        y2="0.75"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M1.4 0.8V7.8C1.4 9.45684 2.74317 10.8 4.40002 10.8H6.40002C8.05688 10.8 9.40002 9.45684 9.40002 7.79999V0.799988"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Line
        x1="16.45"
        y1="21.25"
        x2="16.45"
        y2="11.75"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M19.9908 7.05751L19.3386 3.25285C19.1155 1.95139 17.9871 1 16.6667 1C15.3462 1 14.2179 1.95139 13.9948 3.25285L13.3425 7.05751C12.9893 9.11787 14.5763 11 16.6667 11C18.7571 11 20.344 9.11787 19.9908 7.05751Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
