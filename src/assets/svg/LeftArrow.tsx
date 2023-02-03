import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from './Svg.types';

export const LeftArrow: React.FC<ISvgProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474Z'
      fill={color}
    />
  </Svg>
);
