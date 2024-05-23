import React, { type ComponentType } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import { styles } from './virtualizedFlatListSection.styles';
import type { KeyValuePairType } from '../../../types/types';

export default function VirtualizedFlatListSection() {
  const {
    fallbackOnNotFound,
    onSelect: onSelectFromClientSide,
    heightOut,
    updateInputText,
    mutableData,
    shouldDisplayInComboBox,
    heightAnim,
  } = useVirtualizedComboContext();

  const onSelect = (key: KeyValuePairType['key'], value: KeyValuePairType['value']) => {
    updateInputText(shouldDisplayInComboBox === 'key' ? key : value);
    heightOut();
    onSelectFromClientSide({ key, value });
  };

  return (
    <>
    <Animated.FlatList
      data={mutableData}
      contentContainerStyle={styles.flatListContainer}
      keyExtractor={({ key }) => key}
      renderItem={({ item: { key, value } }) =>
        <TouchableOpacity onPress={() => onSelect(key, value)} style={styles.flatListTouchable}>
          <Text style={styles.flatListTouchableText}>
            {shouldDisplayInComboBox === 'key' ?
              key
              : value
            }
          </Text>
        </TouchableOpacity>
      }
      ListEmptyComponent={typeof fallbackOnNotFound === 'string' ?
        <View style={styles.fallbackTextContainer}>
          <Text style={styles.fallbackText}>{fallbackOnNotFound}</Text>
        </View>
        :
        (fallbackOnNotFound as unknown as ComponentType<any>)
      }
      style={[styles.flatListContainer, {
        height: heightAnim,
      }]}>
    </Animated.FlatList>
    </>
  );
}
