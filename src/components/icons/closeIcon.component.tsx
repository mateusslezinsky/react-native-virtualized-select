import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CloseIconProps {
  color?: string;
  size?: number;

}

export default function CloseIcon({
                                    color = '#000',
                                    size = 24,
                                  }: CloseIconProps) {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill={color}>
      <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </Svg>
  );
}
