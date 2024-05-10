import React, { type JSX, useRef } from 'react';
import { Animated, Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { VirtualizedComboProps } from './types/types';
import { styles } from './index.styles';

const defaultProps: Partial<VirtualizedComboProps> = {
  theme: {
    labelStyle: {},
  },
};

function VirtualizedCombo({ theme = defaultProps.theme, labelText }: VirtualizedComboProps): JSX.Element {
  const labelStyle = theme?.labelStyle;

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
  };

  const onSearch = () => {
    heightIn();
  };

  const onClear = () => {
    heightOut();
  };

  return (
    <View style={styles.mainView}>
      <Text style={[styles.label, labelStyle]}>{labelText}</Text>
      <View style={styles.innerView}>
        <TextInput placeholder="Search here" style={styles.textInput} />
        <View style={styles.actionsView}>
          <TouchableOpacity style={styles.sendButton} onPress={onSearch}>
            <Text>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={onClear}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
        <Animated.FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          style={{ height: heightAnim }}
        />

    </View>
  );
}
export default VirtualizedCombo;
