import { styles } from '../../../index.styles';
import { TouchableOpacity, View } from 'react-native';
import SearchIcon from '../../icons/searchIcon.component';
import CloseIcon from '../../icons/closeIcon.component';
import React from 'react';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import type { KeyValuePairType } from '../../../types/types';

export default function VirtualizedActionsSection() {
  const { heightIn, heightOut, updateInputText, mutableData, updateMutableData, inputText, data } = useVirtualizedComboContext()

  const onSearch = () => {
    heightIn();
    updateMutableData(draft =>
      draft = inputText.length ?
        (draft as KeyValuePairType[]).filter(({value}) => value.toLowerCase().includes(inputText.toLowerCase())) :
        data as KeyValuePairType[]
    )
  };

  const onClear = () => {
    heightOut();
    updateInputText("");
    if (data.length === mutableData.length) return;
    updateMutableData(data as KeyValuePairType[]);
  };

  return (
    <View style={styles.actionsView}>
      <TouchableOpacity style={styles.sendButton} onPress={onSearch}>
        <SearchIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  )
}
