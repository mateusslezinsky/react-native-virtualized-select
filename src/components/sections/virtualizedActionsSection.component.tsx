import { styles } from '../../index.styles';
import { TouchableOpacity, View } from 'react-native';
import SearchIcon from '../icons/searchIcon.component';
import CloseIcon from '../icons/closeIcon.component';
import React from 'react';
import { useVirtualizedComboContext } from '../../context/virtualizedCombo.context';

export default function VirtualizedActionsSection() {
  const { heightIn, heightOut } = useVirtualizedComboContext()

  const onSearch = () => {
    heightIn();
  };

  const onClear = () => {
    heightOut();
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
