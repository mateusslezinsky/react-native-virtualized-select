import React, { type JSX, useRef } from 'react';
import { Animated, Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { VirtualizedListProps } from './types/types';
import { styles } from './index.styles';
import Icon from 'react-native-vector-icons/AntDesign';

const defaultProps: Partial<VirtualizedListProps> = {
  theme: {
    labelStyle: {}
  },
}

function VirtualizedList(props: VirtualizedListProps): JSX.Element {
  const { theme: { labelStyle }, labelText } = props as Required<VirtualizedListProps>;

  const heightAnim = useRef(new Animated.Value(0)).current;

  const heightIn = () => {
    Animated.timing(heightAnim, {
      toValue: 150,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const heightOut = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const onSearch = () => {
    heightIn();
  }

  const onClear = () => {
    heightOut();
  }

  return (
    <View style={styles.mainView}>
      <Text style={[styles.label, labelStyle]}>{labelText}</Text>
      <TextInput />
      <TouchableOpacity style={styles.sendButton} onPress={onSearch}>
        <Icon name="search1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Icon name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

VirtualizedList.defaultProps = defaultProps;

export default VirtualizedList;
