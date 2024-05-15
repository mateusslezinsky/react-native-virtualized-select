import type { PropsWithChildren } from 'react';
import { useVirtualizedComboContext } from '../../context/virtualizedCombo.context';
import VirtualizedFlatListSection from './virtualizedFlatListSection.component';
import type { KeyValuePairType, VirtualizedComboProps } from '../../types/types';
import VirtualizedActionsSection from './virtualizedActionsSection.component';

function VirtualizedSections({ children, ...props }: PropsWithChildren<Partial<VirtualizedComboProps>>) {
  const { data } = useVirtualizedComboContext();

  if (props?.data) {
    data.current = props.data as ArrayLike<KeyValuePairType>;
  }
  return children;
}

VirtualizedSections.FlatList = VirtualizedFlatListSection;
VirtualizedSections.Actions = VirtualizedActionsSection;

export default VirtualizedSections;
