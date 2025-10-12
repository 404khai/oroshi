import React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';

interface CoinIconProps {
  width?: number;
  height?: number;
}

const CoinIcon: React.FC<CoinIconProps> = ({ width = 14, height = 13 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 14 13"
    fill="none"
  >
    <Path
      d="M0.999727 3.50769C0.999727 1.57045 3.68602 0 6.99973 0C10.3134 0 12.9997 1.57045 12.9997 3.50769V8.86154C12.9997 10.7988 10.3134 12.3692 6.99973 12.3692C3.68602 12.3692 0.999727 10.7988 0.999727 8.86154V3.50769Z"
      fill="white"
    />
    <Ellipse cx="6.90751" cy="3.96925" rx="5.16923" ry="3.04615" fill="#FF593C" />
    <Ellipse cx="6.99986" cy="3.87695" rx="2.67692" ry="1.47692" fill="white" />
  </Svg>
);

export default CoinIcon;
