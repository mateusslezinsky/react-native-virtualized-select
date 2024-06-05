import React, { type JSX } from 'react';
import type { VirtualizedComboProps } from './types/types';
import VirtualizedSections from './components/sections/virtualizedSections.component';
import { VirtualizedComboProvider } from './context/virtualizedCombo.context';

const defaultProps: Partial<VirtualizedComboProps> = {
  theme: {
    labelStyle: {},
    inputStyle: {},
    comboStyle: {},
    searchButtonStyle: {},
    clearButtonStyle: {},
    outerContainerStyle: {},
    searchButtonIconSize: 24,
    clearButtonIconSize: 24,
    searchButtonIconColor: '#000',
    clearButtonIconColor: '#000',
  },
  shouldDisplayInComboBox: 'value',
  inputPlaceholder: 'Search...',
  onClear: () => {
  },
  display: 'outline',
  mode: 'search'
};

function VirtualizedCombo({
                            theme = defaultProps.theme,
                            shouldDisplayInComboBox = defaultProps.shouldDisplayInComboBox,
                            inputPlaceholder = defaultProps.inputPlaceholder,
                            onClear = defaultProps.onClear,
                            display = defaultProps.display,
                            mode = defaultProps.mode,
                            ...props
                          }: VirtualizedComboProps): JSX.Element {

  return (
    <VirtualizedComboProvider
      theme={theme}
      shouldDisplayInComboBox={shouldDisplayInComboBox}
      inputPlaceholder={inputPlaceholder}
      onClear={onClear}
      mode={mode}
      display={display}
      {...props}
    >
      <VirtualizedSections>
        <VirtualizedSections.Input>
          <VirtualizedSections.FlatList />

        </VirtualizedSections.Input>
      </VirtualizedSections>
    </VirtualizedComboProvider>
  );
}

export default VirtualizedCombo;
export * from './types/types';
