import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

interface Props {
  size?: number;
  color?: string;
}

const PackageIcon: React.FC<Props> = ({ size = 16, color = "#FF593C" }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M1.99973 5.50769C1.99973 3.57045 4.68602 2 7.99973 2C11.3134 2 13.9997 3.57045 13.9997 5.50769V10.8615C13.9997 12.7988 11.3134 14.3692 7.99973 14.3692C4.68602 14.3692 1.99973 12.7988 1.99973 10.8615V5.50769Z"
      fill="white"
    />
    <Ellipse cx="7.90751" cy="5.96925" rx="5.16923" ry="3.04615" fill={color} />
    <Ellipse cx="7.99986" cy="5.87695" rx="2.67692" ry="1.47692" fill="white" />
  </Svg>
);

export default PackageIcon;
