import type { StyleProp, TextStyle } from 'react-native';

export interface VirtualizedListProps {
  theme?: {
    labelStyle?: StyleProp<TextStyle>
  }
  labelText: string;
}
