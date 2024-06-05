import { styles } from '../../../index.styles';
import { TouchableOpacity, View } from 'react-native';
import SearchIcon from '../../icons/searchIcon.component';
import CloseIcon from '../../icons/closeIcon.component';
import React from 'react';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import type { KeyValuePairType } from '../../../types/types';

export default function VirtualizedActionsSection() {
  const {
    theme: {
      searchButtonStyle,
      clearButtonStyle,
      searchButtonIconSize,
      searchButtonIconColor,
      clearButtonIconColor,
      clearButtonIconSize,
    },
    onClear: onClearFromClientSide,
    heightIn,
    heightOut,
    updateInputText,
    mutableData,
    updateMutableData,
    inputText,
    data,
    mode,
  } = useVirtualizedComboContext();

  const onSearch = () => {
    heightIn();
    if (mode === 'search') updateMutableData(inputText.length ?
      (data as KeyValuePairType[]).filter(({ value }) => value.toLowerCase().includes(inputText.toLowerCase())) :
      data as KeyValuePairType[],
    );
  };

  const onClear = () => {
    if (!inputText.length) heightOut();
    updateInputText('');
    onClearFromClientSide();
    if (data.length === mutableData.length) return;
    updateMutableData(data as KeyValuePairType[]);
  };

  return (
    <View style={styles.actionsView}>
      <TouchableOpacity style={[styles.sendButton, searchButtonStyle]} onPress={onSearch}>
        {
          mode === 'search' &&
          <SearchIcon color={searchButtonIconColor} size={searchButtonIconSize} />
        }
      </TouchableOpacity>
      <TouchableOpacity style={[styles.clearButton, clearButtonStyle]} onPress={onClear}>
        <CloseIcon color={clearButtonIconColor} size={clearButtonIconSize} />
      </TouchableOpacity>
    </View>
  );
}
