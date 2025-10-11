import React from "react";
import Svg, { Path } from "react-native-svg";

interface EditIcon2Props {
  width?: number;
  height?: number;
  color?: string;
}

const EditIcon2: React.FC<EditIcon2Props> = ({
  width = 20,
  height = 20,
  color = "#8E8E93",
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M10.6998 4.40032L15.5995 9.30002M11.4516 4.31982C11.9731 3.75496 12.2334 3.47287 12.5106 3.30768C12.8378 3.11182 13.2109 3.00566 13.5922 2.99988C13.9735 2.99411 14.3496 3.08893 14.6826 3.27479C14.9647 3.43158 15.2335 3.70596 15.771 4.25473C16.3086 4.80419 16.5774 5.07928 16.73 5.36696C16.912 5.70952 17.0046 6.09253 16.9991 6.48044C16.9936 6.86834 16.8902 7.24857 16.6985 7.58582C16.5375 7.86861 16.261 8.13529 15.7073 8.66796L9.12563 15.0075C8.07709 16.0175 7.55282 16.5222 6.89766 16.7784C6.2425 17.0346 5.52224 17.015 4.08173 16.9779L3.88574 16.9723C3.44757 16.9611 3.22778 16.9555 3.10109 16.8106C2.973 16.6657 2.9905 16.4424 3.02549 15.9958L3.04439 15.7536C3.14239 14.4965 3.19138 13.8679 3.43637 13.3024C3.68135 12.7368 4.10553 12.2783 4.95248 11.3607L11.4516 4.31982Z"
      stroke={color}
      strokeWidth={1.35}
      strokeLinejoin="round"
    />
    <Path
      d="M11.4002 16.9995H16.9999"
      stroke={color}
      strokeWidth={1.35}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditIcon2;
