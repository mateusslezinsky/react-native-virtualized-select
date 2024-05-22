import { Animated, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';

export type KeyValuePairType = {
  key: string;
  value: any;
}

export type KeyValueFlatListType = Animated.WithAnimatedObject<ArrayLike<KeyValuePairType>>;

export interface VirtualizedComboProps {
  theme?: {
    labelStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    comboStyle?: StyleProp<ViewStyle>;
    searchButtonStyle?: StyleProp<ViewStyle>;
    clearButtonStyle?: StyleProp<ViewStyle>;
    outerContainerStyle?: StyleProp<ViewStyle>;
    searchButtonIconSize?: number;
    clearButtonIconSize?: number;
    searchButtonIconColor?: string;
    clearButtonIconColor?: string;
  }
  labelText: string;
  data: KeyValueFlatListType;
  shouldDisplayInComboBox?: keyof KeyValuePairType;
  inputPlaceholder?: string;
  onSelect: (keyValuePair: KeyValuePairType) => void;
  value: KeyValuePairType;
  onClear?: () => void;
  fallbackOnNotFound?: string | ReactNode;
}
