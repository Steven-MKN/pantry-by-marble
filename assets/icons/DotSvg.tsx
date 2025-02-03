import * as React from 'react';
import Svg, { Rect, SvgProps } from 'react-native-svg';

export const DotSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={8}
    fill="none"
    {...props}
  >
    <Rect
      width={4}
      height={4}
      x={10}
      y={4}
      fill={props.color ?? '#FCF9F5'}
      rx={2}
    />
  </Svg>
);
