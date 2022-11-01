import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import PropTypes from "prop-types";

const EllipseVerticalIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <G clipPath="url(#clip0_17_10)">
        <Path
          d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
          fill={color}
        />
        <Path
          d="M2.5 14C3.88071 14 5 12.8807 5 11.5C5 10.1193 3.88071 9 2.5 9C1.11929 9 0 10.1193 0 11.5C0 12.8807 1.11929 14 2.5 14Z"
          fill={color}
        />
        <Path
          d="M2.5 23C3.88071 23 5 21.8807 5 20.5C5 19.1193 3.88071 18 2.5 18C1.11929 18 0 19.1193 0 20.5C0 21.8807 1.11929 23 2.5 23Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_17_10">
          <Rect height={height} width={width} fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

EllipseVerticalIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

EllipseVerticalIcon.defaultProps = {
  color: "white",
  width: 5,
  height: 23,
};

export default EllipseVerticalIcon;
