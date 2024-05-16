import React, { type ReactNode, useRef } from 'react';
import { styles } from '../../../index.styles';
import { Text, TextInput, View } from 'react-native';
import { useVirtualizedComboContext } from '../../../context/virtualizedCombo.context';
import VirtualizedActionsSection from '../actions/virtualizedActionsSection.component';

export default function VirtualizedInputSection({children}: {children: ReactNode}) {
  const { labelText, theme: { labelStyle } } = useVirtualizedComboContext();
  const textRef = useRef<string>("")

  return (
    <View style={styles.mainView}>
      <Text style={[styles.label, labelStyle]}>{labelText}</Text>
      <View style={styles.innerView}>
        <TextInput placeholder="Search here" style={styles.textInput} />
        <VirtualizedActionsSection />
      </View>
      {children}
    </View>
  )
}
