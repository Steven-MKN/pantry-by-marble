import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

export const LessSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Rect
      width={28}
      height={28}
      x={1}
      y={1}
      fill={props.fill ?? '#FCF9F5'}
      rx={14}
    />
    <Rect
      width={28}
      height={28}
      x={1}
      y={1}
      stroke={props.color ?? '#54634B'}
      strokeWidth={2}
      rx={14}
    />
    <Path
      fill={props.color ?? '#54634B'}
      d="M19.667 14.333h-9.334a.667.667 0 0 0 0 1.334h9.334a.667.667 0 0 0 0-1.334Z"
    />
  </Svg>
);
