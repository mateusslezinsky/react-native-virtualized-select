import React, { type JSX } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { VirtualizedComboProps } from './types/types';
import { styles } from './index.styles';
import VirtualizedSections from './components/sections/virtualizedSections.component';
import { VirtualizedComboProvider } from './context/virtualizedCombo.context';

const defaultProps: Partial<VirtualizedComboProps> = {
  theme: {
    labelStyle: {},
  },
  shouldDisplayInComboBox: 'value',
};

function VirtualizedCombo({
                            theme = defaultProps.theme,
                            labelText,
                            shouldDisplayInComboBox = defaultProps.shouldDisplayInComboBox,
                            ...props
                          }: VirtualizedComboProps): JSX.Element {
  const labelStyle = theme?.labelStyle;


  return (
    <VirtualizedComboProvider>
      <VirtualizedSections {...props}>
        <View style={styles.mainView}>
          <Text style={[styles.label, labelStyle]}>{labelText}</Text>
          <View style={styles.innerView}>
            <TextInput placeholder="Search here" style={styles.textInput} />
            <VirtualizedSections.Actions />
          </View>
          <VirtualizedSections.FlatList />
        </View>
      </VirtualizedSections>
    </VirtualizedComboProvider>
  );
}

export default VirtualizedCombo;
