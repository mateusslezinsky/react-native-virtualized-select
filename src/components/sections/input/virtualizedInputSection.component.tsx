import React, { type ReactNode } from 'react';
import { styles } from '../../../index.styles';
import { Text, TextInput, View } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import VirtualizedActionsSection from '../actions/virtualizedActionsSection.component';
import type { KeyValuePairType } from 'react-native-virtualized-select';

export default function VirtualizedInputSection({ children }: { children: ReactNode }) {
  const {
    display,
    inputPlaceholder,
    inputText,
    updateInputText,
    labelText,
    updateMutableData,
    data,
    theme: { labelStyle },
    mode,
  } = useVirtualizedComboContext();
  const onInputTextChange = (text: string) => {
    updateInputText(text);
    if (mode === 'select') updateMutableData(
      text.length ?
        (data as KeyValuePairType[]).filter(({ value }) => value.toLowerCase().includes(text.toLowerCase())) :
        data as KeyValuePairType[],
    );
  };

  return (
    <View style={[styles.mainView, { borderWidth: display === 'standard' ? 0 : styles.mainView.borderWidth }]}>
      {display === 'outline' && <Text style={[styles.label, labelStyle]}>{labelText}</Text>}
      <View style={styles.innerView}>
        <TextInput
          value={inputText}
          onChangeText={onInputTextChange}
          placeholder={inputPlaceholder}
          style={styles.textInput} />
        <VirtualizedActionsSection />
      </View>
      {display === 'standard' && <View style={styles.bottomLine} />}
      {children}
    </View>
  );
}
