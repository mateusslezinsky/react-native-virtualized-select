import { styles } from '../virtualizedFlatListSection.styles';
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import type { KeyValuePairType } from '../../../../types/types';
import { useVirtualizedComboContext } from '../../../../context/virtualizedCombo.context';
import type { VirtualizedItemProps } from '../../../../types/virtualizedItemProps';

export default function VirtualizedItem(
  {
    itemKey: key,
    itemValue: value,
  }: VirtualizedItemProps,
) {
  const {
    onSelect: onSelectFromClientSide,
    heightOut,
    updateInputText,
    shouldDisplayInComboBox,
    customItemComponent: CustomItem
  } = useVirtualizedComboContext();

  const onSelect = (key: KeyValuePairType['key'], value: KeyValuePairType['value']) => {
    updateInputText(shouldDisplayInComboBox === 'key' ? key : value);
    heightOut();
    onSelectFromClientSide({ key, value });
  };

  return (
    <TouchableOpacity onPress={() => onSelect(key, value)} style={styles.flatListTouchable}>
      {(CustomItem && <CustomItem itemKey={key} itemValue={value} />) ??
        <Text style={styles.flatListTouchableText}>
          {shouldDisplayInComboBox === 'key' ?
            key : value
          }
        </Text>
      }
    </TouchableOpacity>
  );
}
