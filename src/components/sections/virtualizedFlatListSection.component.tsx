import React from 'react';
import { Animated, Text } from 'react-native';
import { useVirtualizedComboContext } from '../../context/virtualizedCombo.context';

export default function VirtualizedFlatListSection() {
  const { data, heightAnim } = useVirtualizedComboContext();

  return (
    <Animated.FlatList
      data={data?.current}
      renderItem={({ item }) =>
        <Text>
          {/*{shouldDisplayInComboBox === 'key' ?*/}
          {item.key}
          {/*: item.value*/}
          {/*}*/}
        </Text>
      }
      style={{ height: heightAnim }}
    />
  );
}
