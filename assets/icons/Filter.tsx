import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const FilterSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color ?? '#FCF9F5'}
      d="M12.183 15.667H16.5a.833.833 0 0 0 0-1.667h-4.317a2.5 2.5 0 0 0-4.7 0H1.5a.833.833 0 1 0 0 1.667h5.983a2.5 2.5 0 0 0 4.7 0ZM9 14.833a.833.833 0 1 1 1.666 0 .833.833 0 0 1-1.666 0Zm-1.817-5H16.5a.833.833 0 0 0 0-1.666H7.183a2.5 2.5 0 0 0-4.7 0H1.5a.833.833 0 1 0 0 1.666h.983a2.5 2.5 0 0 0 4.7 0ZM4 9a.833.833 0 1 1 1.667 0A.833.833 0 0 1 4 9Zm9.85-5h2.65a.833.833 0 0 0 0-1.667h-2.65a2.5 2.5 0 0 0-4.7 0H1.5A.833.833 0 1 0 1.5 4h7.65a2.5 2.5 0 0 0 4.7 0Zm-3.183-.833a.834.834 0 1 1 1.667 0 .834.834 0 0 1-1.667 0Z"
    />
  </Svg>
);
