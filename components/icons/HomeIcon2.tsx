import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HomeShieldIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeIcon2: React.FC<HomeShieldIconProps> = ({
  width = 16,
  height = 16,
  color = '#FF593C',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <Path
      d="M13.3601 4.54667L9.52012 1.86C8.47345 1.12667 6.86678 1.16667 5.86012 1.94667L2.52012 4.55333C1.85345 5.07333 1.32678 6.14 1.32678 6.98V11.58C1.32678 13.28 2.70678 14.6667 4.40678 14.6667H11.5934C13.2934 14.6667 14.6734 13.2867 14.6734 11.5867V7.06667C14.6734 6.16667 14.0934 5.06 13.3601 4.54667ZM8.66678 12C8.66678 12.2733 8.45367 12.6667 8.00012 12.6667C7.54657 12.6667 7.33345 12.2733 7.33345 12V10C7.33345 9.72667 7.48185 9.33333 8.00012 9.33333C8.51838 9.33333 8.66678 9.72667 8.66678 10V12Z"
      fill={color}
    />
  </Svg>
);

export default HomeIcon2;
