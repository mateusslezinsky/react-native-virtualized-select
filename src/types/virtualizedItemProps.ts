import type { KeyValuePairType } from './types';

export type VirtualizedItemProps = {
  itemKey: KeyValuePairType['key'];
  itemValue: KeyValuePairType['value'];
}
