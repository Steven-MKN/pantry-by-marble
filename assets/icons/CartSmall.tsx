import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

export const CartSmallSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Rect width={19} height={19} x={0.5} y={0.5} fill="#FCF9F5" rx={9.5} />
    <Rect width={19} height={19} x={0.5} y={0.5} stroke="#54634B" rx={9.5} />
    <Path
      fill={props.color ?? '#54634B'}
      d="M13.958 11.944H7.153a.486.486 0 1 1 0-.972h5.075a1.459 1.459 0 0 0 1.414-1.103l.802-3.155a.486.486 0 0 0-.486-.603H7.036a1.458 1.458 0 0 0-1.37-.972h-.458a.486.486 0 0 0 0 .972h.457a.486.486 0 0 1 .486.37l.03.233L7.02 10a1.46 1.46 0 1 0 .132 2.917h.087a1.458 1.458 0 1 0 2.742 0h1.147a1.46 1.46 0 1 0 2.742 0h.087a.486.486 0 1 0 0-.973Zm-.622-4.86L12.7 9.63a.486.486 0 0 1-.486.37H8.018l-.73-2.918h6.048Zm-4.725 6.805a.486.486 0 1 1 0-.972.486.486 0 0 1 0 .972Zm3.889 0a.486.486 0 1 1 0-.972.486.486 0 0 1 0 .972Z"
    />
  </Svg>
);
