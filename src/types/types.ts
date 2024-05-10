import type { StyleProp, TextStyle } from 'react-native';

export interface VirtualizedComboProps {
  theme?: {
    labelStyle?: StyleProp<TextStyle>
  }
  labelText: string;
}
