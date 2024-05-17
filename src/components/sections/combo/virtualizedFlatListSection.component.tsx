import React from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import { styles } from './virtualizedFlatListSection.styles';

export default function VirtualizedFlatListSection() {
  const { heightOut, updateInputText, mutableData, shouldDisplayInComboBox, heightAnim } = useVirtualizedComboContext();

  const onSelect = (value: string) => {
    updateInputText(value);
    heightOut();
  };

  return (
    <Animated.FlatList
      data={mutableData}
      contentContainerStyle={styles.flatListContainer}
      keyExtractor={({ key }) => key}
      renderItem={({ item: { key, value } }) =>
        <TouchableOpacity onPress={() => onSelect(value)} style={styles.flatListTouchable}>
          <Text style={styles.flatListTouchableText}>
            {shouldDisplayInComboBox === 'key' ?
              key
              : value
            }
          </Text>
        </TouchableOpacity>
      }
      style={[styles.flatListContainer, { height: heightAnim }]}
    />
  );
}
