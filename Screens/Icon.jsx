import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => {
  const { fill, stroke, w, h } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={w || 33}
      height={h || 33}
      fill="none"
      {...props}
    >
      <G filter="url(#a)">
        <Circle
          cx={16.5}
          cy={12.5}
          r={12}
          fill={fill || "#fff"}
          stroke={stroke || "#E8E8E8"}
        />
        <Path
          fill={fill || "#BDBDBD"}
          fillRule="evenodd"
          d="M17 6h-1v6h-6v1h6v6h1v-6h6v-1h-6V6Z"
          clipRule="evenodd"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
export default SvgComponent;
