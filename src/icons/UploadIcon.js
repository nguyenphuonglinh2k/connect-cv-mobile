import React from "react";
import Svg, { Path, G, Defs, Rect, ClipPath } from "react-native-svg";
import PropTypes from "prop-types";

const UploadIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <G clipPath="url(#clip0_39_2)">
        <Path
          d="M11.0089 0.367353C10.4509 -0.120928 9.54464 -0.120928 8.98661 0.367353L3.27232 5.36735C2.71429 5.85563 2.71429 6.6486 3.27232 7.13688C3.83036 7.62517 4.73661 7.62517 5.29464 7.13688L8.57143 4.2697V12.5002C8.57143 13.1916 9.20982 13.7502 10 13.7502C10.7902 13.7502 11.4286 13.1916 11.4286 12.5002V4.2697L14.7054 7.13688C15.2634 7.62517 16.1696 7.62517 16.7277 7.13688C17.2857 6.6486 17.2857 5.85563 16.7277 5.36735L11.0134 0.367353H11.0089ZM2.85714 13.7502C2.85714 13.0588 2.21875 12.5002 1.42857 12.5002C0.638393 12.5002 0 13.0588 0 13.7502V16.2502C0 18.3205 1.91964 20.0002 4.28571 20.0002H15.7143C18.0804 20.0002 20 18.3205 20 16.2502V13.7502C20 13.0588 19.3616 12.5002 18.5714 12.5002C17.7813 12.5002 17.1429 13.0588 17.1429 13.7502V16.2502C17.1429 16.9416 16.5045 17.5002 15.7143 17.5002H4.28571C3.49554 17.5002 2.85714 16.9416 2.85714 16.2502V13.7502Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_39_2">
          <Rect height={height} width={width} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

UploadIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

UploadIcon.defaultProps = {
  color: "#673ab7",
  width: 20,
  height: 20,
};

export default UploadIcon;
