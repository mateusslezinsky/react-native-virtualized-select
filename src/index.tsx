import React, { type JSX } from 'react';
import type { VirtualizedComboProps } from './types/types';
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
                            shouldDisplayInComboBox = defaultProps.shouldDisplayInComboBox,
                            ...props
                          }: VirtualizedComboProps): JSX.Element {

  return (
    <VirtualizedComboProvider
      theme={theme}
      shouldDisplayInComboBox={shouldDisplayInComboBox}
      {...props}
    >
      <VirtualizedSections>
        <VirtualizedSections.Input>
          <VirtualizedSections.FlatList/>
        </VirtualizedSections.Input>
      </VirtualizedSections>
    </VirtualizedComboProvider>
  );
}

export default VirtualizedCombo;
