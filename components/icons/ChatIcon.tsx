import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChatIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M5.99988 15.1438H9.19988L12.7599 17.5118C13.2879 17.8638 13.9999 17.4878 13.9999 16.8478V15.1438C16.3999 15.1438 17.9999 13.5438 17.9999 11.1438V6.34375C17.9999 3.94375 16.3999 2.34375 13.9999 2.34375H5.99988C3.59988 2.34375 1.99988 3.94375 1.99988 6.34375V11.1438C1.99988 13.5438 3.59988 15.1438 5.99988 15.1438Z"
      stroke="#808087"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChatIcon;
