import { Animated, type StyleProp, type TextStyle } from 'react-native';

export type KeyValuePairType = {
  key: string;
  value: any;
}

export type KeyValueFlatListType = Animated.WithAnimatedObject<ArrayLike<KeyValuePairType>>;

export interface VirtualizedComboProps {
  theme?: {
    labelStyle?: StyleProp<TextStyle>
  }
  labelText: string;
  data: KeyValueFlatListType;
  shouldDisplayInComboBox?: keyof KeyValuePairType;
}
