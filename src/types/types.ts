import { Animated, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';

export type KeyValuePairType = {
  key: string;
  value: any;
}

export type KeyValueFlatListType = Animated.WithAnimatedObject<ArrayLike<KeyValuePairType>>;

export interface VirtualizedComboProps {
  // Required props

  /**
   * @description The label text that will be displayed above the combo box.
   */
  labelText: string;

  /**
   * @description The data that will be displayed in the combo box. The data format should follow the standard key value pair format:
   * @example { key: string, value: any }[]
   * @type {KeyValueFlatListType}
   */
  data: KeyValueFlatListType;

  /**
   * @description The selected value that will be stored when onSelect method is called. See type signature below.
   * @example { key: string, value: any }
   * @type {KeyValuePairType}
   */
  value: KeyValuePairType;

  /**
   * @description The method that will be called when a value is selected. See function signature below.
   * @example (keyValuePair: KeyValuePairType) => void
   * @type {(keyValuePair: KeyValuePairType) => void}
   */
  onSelect: (keyValuePair: KeyValuePairType) => void;

  // Optional props
  shouldDisplayInComboBox?: keyof KeyValuePairType;
  inputPlaceholder?: string;
  onClear?: () => void;
  fallbackOnNotFound?: string | ReactNode;
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
  };
}
