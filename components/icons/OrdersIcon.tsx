import React from "react";
import Svg, { Path } from "react-native-svg";

export function OrdersIcon({ focused }: { focused: boolean }) {
  const strokeColor = focused ? "#FF593C" : "#7B7879";

  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" fill="none">
      <Path
        d="M1 9C1 5.229 1 3.343 2.172 2.172C3.344 1.001 5.229 1 9 1H11C14.771 1 16.657 1 17.828 2.172C18.999 3.344 19 5.229 19 9V13C19 16.771 19 18.657 17.828 19.828C16.656 20.999 14.771 21 11 21H9C5.229 21 3.343 21 2.172 19.828C1.001 18.656 1 16.771 1 13V9Z"
        stroke={strokeColor}
        strokeWidth={1.5}
      />
      <Path
        d="M6 9H14M6 13H12.5"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
