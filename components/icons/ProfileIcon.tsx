import React from "react";
import Svg, { Path } from "react-native-svg";

export function ProfileIcon({ focused }: { focused: boolean }) {
  const strokeColor = focused ? "#FF593C" : "#7B7879";

  return (
    <Svg width={18} height={22} viewBox="0 0 18 22" fill="none">
      <Path
        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
        stroke={strokeColor}
        strokeWidth={1.5}
      />
      <Path
        d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z"
        stroke={strokeColor}
        strokeWidth={1.5}
      />
    </Svg>
  );
}
