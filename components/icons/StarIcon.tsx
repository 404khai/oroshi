import React from "react";
import Svg, { Path } from "react-native-svg";

interface StarIconProps {
  size?: number;
  color?: string;
  filled?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({
  size = 30,
  color = "#FF593C",
  filled = false,
}) => {
  return (
    <Svg width={size} height={size - 1} viewBox="0 0 30 29" fill="none">
      <Path
        d="M14.2613 1.77594C14.5346 1.11891 15.4654 1.11891 15.7387 1.77594L19.0444 9.72391C19.1596 10.0009 19.4201 10.1902 19.7191 10.2141L28.2996 10.902C29.0089 10.9589 29.2966 11.8441 28.7561 12.307L22.2187 17.907C21.9909 18.1022 21.8914 18.4084 21.961 18.7002L23.9583 27.0733C24.1234 27.7655 23.3704 28.3126 22.7631 27.9417L15.417 23.4547C15.161 23.2983 14.839 23.2983 14.583 23.4547L7.2369 27.9417C6.62962 28.3126 5.87661 27.7655 6.04172 27.0733L8.03902 18.7002C8.10862 18.4084 8.00913 18.1022 7.78129 17.907L1.24386 12.307C0.703432 11.8441 0.991051 10.9589 1.70037 10.902L10.2809 10.2141C10.5799 10.1902 10.8404 10.0009 10.9556 9.72391L14.2613 1.77594Z"
        stroke={color}
        strokeWidth={1.4}
        fill={filled ? color : "none"}
      />
    </Svg>
  );
};

export default StarIcon;
