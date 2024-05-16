import React from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import { styles } from './virtualizedFlatListSection.styles';

export default function VirtualizedFlatListSection() {
  const { shouldDisplayInComboBox, data, heightAnim } = useVirtualizedComboContext();

  return (
    <Animated.FlatList
      data={data}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) =>
        <TouchableOpacity style={styles.flatListTouchable}>
          <Text style={styles.flatListTouchableText}>
            {shouldDisplayInComboBox === 'key' ?
              item.key
              : item.value
            }
          </Text>
        </TouchableOpacity>
      }
      style={[styles.flatListContainer, { height: heightAnim }]}
    />
  );
}
