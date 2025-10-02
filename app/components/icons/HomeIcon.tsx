import React from "react";
import Svg, { Path } from "react-native-svg";

export function HomeIcon({ focused }: { focused: boolean }) {
  if (focused) {
    return (
      <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Path
          d="M18.04 4.82L12.28 0.79C10.71 -0.31 8.3 -0.25 6.79 0.92L1.78 4.83C0.78 5.61 -0.01 7.21 -0.01 8.47V15.37C-0.01 17.92 2.06 20 4.61 20H15.39C17.94 20 20.01 17.93 20.01 15.38V8.6C20.01 7.25 19.14 5.59 18.04 4.82ZM11 16C11 16.41 10.68 17 10 17C9.32 17 9 16.41 9 16V13C9 12.59 9.22 12 10 12C10.78 12 11 12.59 11 13V16Z"
          fill="#FF593C"
        />
      </Svg>
    );
  }

  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.04 4.82L12.28 0.79C10.71 -0.31 8.3 -0.25 6.79 0.92L1.78 4.83C0.78 5.61 -0.01 7.21 -0.01 8.47V15.37C-0.01 17.92 2.06 20 4.61 20H15.39C17.94 20 20.01 17.93 20.01 15.38V8.6C20.01 7.25 19.14 5.59 18.04 4.82Z"
        stroke="#7B7879"
        strokeWidth={1.5}
      />
    </Svg>
  );
}
