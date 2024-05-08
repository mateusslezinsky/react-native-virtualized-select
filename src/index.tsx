import React, { type JSX } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { VirtualizedListProps } from './types/types';
import { styles } from './index.styles';

const defaultProps: Partial<VirtualizedListProps> = {
  theme: {
    labelStyle: {}
  },
}

function VirtualizedList(props: VirtualizedListProps): JSX.Element {
  const { theme: { labelStyle }, labelText } = props as Required<VirtualizedListProps>;

  return (
    <View style={styles.mainView}>
      <Text style={[styles.label, labelStyle]}>{labelText}</Text>
      <TextInput />
    </View>
  );
}

VirtualizedList.defaultProps = defaultProps;

export default VirtualizedList;
