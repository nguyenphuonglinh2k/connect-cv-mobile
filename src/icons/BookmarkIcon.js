import React from "react";
import Svg, { Path, G, Defs, Rect, ClipPath } from "react-native-svg";
import PropTypes from "prop-types";

const BookmarkIcon = ({ height, width, color, fillColor, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <G clipPath="url(#clip0_801_1980)">
        <Path
          d="M15.1374 0.769264C15.367 0.76925 15.5955 0.817448 15.8101 0.912425L16.1215 0.208984L15.8101 0.912425C16.0249 1.00746 16.2229 1.14808 16.3913 1.32852C16.5598 1.50906 16.695 1.72566 16.7871 1.96689C16.8792 2.20817 16.9258 2.46783 16.9232 2.73043H16.9231V2.73813V18.3816V18.3861C16.9241 18.5577 16.8775 18.7228 16.7932 18.8605C16.7091 18.9978 16.5934 19.099 16.4655 19.1583L16.4583 19.1617L16.4511 19.1653C16.3365 19.2213 16.2122 19.2391 16.0921 19.2193C15.9718 19.1996 15.8535 19.1416 15.7541 19.0453L15.7498 19.041L15.7453 19.0369L10.9151 14.4989L10.9004 14.485L10.8849 14.472C10.6394 14.2645 10.3277 14.1463 10.0002 14.1463C9.67273 14.1463 9.36105 14.2645 9.11553 14.472L9.10006 14.485L9.0853 14.4989L4.25513 19.0369L4.2483 19.0433L4.24164 19.0499C4.14414 19.146 4.02746 19.2037 3.90886 19.2233C3.79061 19.2427 3.66816 19.2247 3.55546 19.1683L3.54526 19.1631L3.53491 19.1583C3.40709 19.099 3.29133 18.9978 3.20725 18.8605C3.12295 18.7228 3.07629 18.5577 3.07728 18.3861H3.07729V18.3816V2.73813H3.07733L3.07726 2.73036C3.07193 2.20293 3.2645 1.70284 3.60014 1.338C3.93313 0.976041 4.37749 0.77751 4.83327 0.769264H15.1374Z"
          stroke={color}
          strokeWidth="1.53846"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_801_1980">
          <Rect height={height} width={width} fill={fillColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

BookmarkIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fillColor: PropTypes.string,
};

BookmarkIcon.defaultProps = {
  color: "#40189D",
  fillColor: "white",
  width: 20,
  height: 20,
};

export default BookmarkIcon;
