import * as React from 'react';
import Svg, { Circle, Rect, SvgProps } from 'react-native-svg';

export const ProfileSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Circle
      cx={11}
      cy={5}
      r={4}
      stroke={props.color ?? '#FCF9F5'}
      strokeWidth={2}
    />
    <Rect
      width={20}
      height={7}
      x={1}
      y={13}
      stroke={props.color ?? '#FCF9F5'}
      strokeWidth={2}
      rx={3.5}
    />
  </Svg>
);
