import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
export const LineSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={1}
    height={20}
    fill="none"
    {...props}
  >
    <Path fill="#54634B" d="M0 0h1v20H0z" />
  </Svg>
);
