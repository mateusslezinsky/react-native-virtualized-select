import React, { type JSX } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { VirtualizedListProps } from './types/types';

const defaultProps: Partial<VirtualizedListProps> = {
  theme: {
    labelStyle: {}
  },
}

function VirtualizedList(props: VirtualizedListProps): JSX.Element {
  const { theme: { labelStyle }, labelText } = props as Required<VirtualizedListProps>;

  return (
    <View>
      <Text style={labelStyle}>{labelText}</Text>
      <TextInput />
    </View>
  );
}

VirtualizedList.defaultProps = defaultProps;

export default VirtualizedList;
