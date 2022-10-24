import React from "react";
import Svg, { Path, Defs, G, Rect, ClipPath } from "react-native-svg";
import PropTypes from "prop-types";

const BagIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <G clipPath="url(#clip0_769_1980)">
        <Path
          opacity="0.4"
          d="M0 9.07812C0.05 11.4161 0.19 15.4151 0.21 15.8561C0.281 16.7991 0.642 17.7521 1.204 18.4241C1.986 19.3671 2.949 19.7881 4.292 19.7881C6.148 19.7981 8.194 19.7981 10.181 19.7981C12.176 19.7981 14.112 19.7981 15.747 19.7881C17.071 19.7881 18.064 19.3561 18.836 18.4241C19.398 17.7521 19.759 16.7891 19.81 15.8561C19.83 15.4851 19.93 11.1441 19.99 9.07812H0Z"
          fill={color}
        />
        <Path
          d="M9.24512 13.3838V14.6778C9.24512 15.0918 9.58112 15.4278 9.99512 15.4278C10.4091 15.4278 10.7451 15.0918 10.7451 14.6778V13.3838C10.7451 12.9698 10.4091 12.6338 9.99512 12.6338C9.58112 12.6338 9.24512 12.9698 9.24512 13.3838Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.211 12.556C8.111 12.919 7.762 13.151 7.384 13.101C4.833 12.745 2.395 11.84 0.337 10.481C0.126 10.343 0 10.107 0 9.855V6.389C0 4.289 1.712 2.581 3.817 2.581H5.784C5.972 1.129 7.202 0 8.704 0H11.286C12.787 0 14.018 1.129 14.206 2.581H16.183C18.282 2.581 19.99 4.289 19.99 6.389V9.855C19.99 10.107 19.863 10.342 19.654 10.481C17.592 11.846 15.144 12.755 12.576 13.11C12.541 13.115 12.507 13.117 12.473 13.117C12.134 13.117 11.831 12.888 11.746 12.552C11.544 11.756 10.821 11.199 9.99 11.199C9.148 11.199 8.433 11.744 8.211 12.556ZM11.286 1.5H8.704C8.031 1.5 7.469 1.96 7.301 2.581H12.688C12.52 1.96 11.958 1.5 11.286 1.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_769_1980">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

BagIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

BagIcon.defaultProps = {
  color: "#40189D",
  width: 20,
  height: 20,
};

export default BagIcon;
