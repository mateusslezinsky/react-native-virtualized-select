import type { PropsWithChildren } from 'react';
import type { VirtualizedComboProps } from '../../types/types';
import VirtualizedInputSection from './input/virtualizedInputSection.component';
import VirtualizedFlatListSection from './combo/virtualizedFlatListSection.component';

function VirtualizedSections({ children }: PropsWithChildren<Partial<VirtualizedComboProps>>) {
  return children;
}

VirtualizedSections.Input = VirtualizedInputSection;
VirtualizedSections.FlatList = VirtualizedFlatListSection;

export default VirtualizedSections;
