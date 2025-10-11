import React from "react";
import Svg, { Path } from "react-native-svg";

interface SearchIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  width = 20,
  height = 20,
  color = "#1C1C1E",
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.54536 2C4.93041 2 1.99991 4.9305 1.99991 8.54545C1.99991 12.1604 4.93041 15.0909 8.54536 15.0909C10.0908 15.0909 11.5112 14.5553 12.631 13.6596L16.7584 17.787C17.0424 18.071 17.5029 18.071 17.7869 17.787C18.0709 17.503 18.0709 17.0425 17.7869 16.7585L13.6595 12.631C14.5552 11.5113 15.0908 10.0909 15.0908 8.54545C15.0908 4.9305 12.1603 2 8.54536 2ZM3.45445 8.54545C3.45445 5.73382 5.73373 3.45455 8.54536 3.45455C11.357 3.45455 13.6363 5.73382 13.6363 8.54545C13.6363 11.3571 11.357 13.6364 8.54536 13.6364C5.73373 13.6364 3.45445 11.3571 3.45445 8.54545Z"
      fill={color}
    />
  </Svg>
);

export default SearchIcon;
