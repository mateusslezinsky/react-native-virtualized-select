import React, { type ComponentType } from 'react';
import { Animated, Text, View } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import { styles } from './virtualizedFlatListSection.styles';
import VirtualizedItem from './virtualizedItem/virtualizedItem.component';

export default function VirtualizedFlatListSection() {
  const {
    fallbackOnNotFound,
    mutableData,
    heightAnim,
  } = useVirtualizedComboContext();

  return (
    <>
    <Animated.FlatList
      data={mutableData}
      contentContainerStyle={styles.flatListContainer}
      keyExtractor={({ key }) => key}
      renderItem={({ item: { key, value } }) =>
        <VirtualizedItem itemKey={key} itemValue={value}/>
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
