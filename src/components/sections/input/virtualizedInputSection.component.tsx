import React, { type ReactNode } from 'react';
import { styles } from '../../../index.styles';
import { Text, TextInput, View } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import VirtualizedActionsSection from '../actions/virtualizedActionsSection.component';

export default function VirtualizedInputSection({ children }: { children: ReactNode }) {
  const { inputPlaceholder, inputText, updateInputText, labelText, theme: { labelStyle } } = useVirtualizedComboContext();
  const onInputTextChange = (text: string) => {
    updateInputText(text)
  }

  return (
    <View style={styles.mainView}>
      <Text style={[styles.label, labelStyle]}>{labelText}</Text>
      <View style={styles.innerView}>
        <TextInput
          value={inputText}
          onChangeText={onInputTextChange}
          placeholder={inputPlaceholder}
          style={styles.textInput} />
        <VirtualizedActionsSection />
      </View>
      {children}
    </View>
  );
}
