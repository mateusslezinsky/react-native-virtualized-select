import { Animated, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';

export type KeyValuePairType = {
  key: string;
  value: any;
}
export type KeyValueFlatListType = Animated.WithAnimatedObject<ArrayLike<KeyValuePairType>>;

export type ThemeProp = {
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

export interface VirtualizedComboProps {
  // Required props
  /**
   * @description The label text that will be displayed above the combo box.
   * @example 'Select an item'
   */
  labelText: string;

  /**
   * @description The data that will be displayed in the combo box. The object array should follow a somewhat standard key value pair format, similar to the example below:
   * @example [{ key: "1", value: "Item 1" }, { key: "2", value: "Item 2" }, ...other]
   * @type {KeyValueFlatListType}
   */
  data: KeyValueFlatListType;

  /**
   * @description The selected value that will be stored when onSelect method is called. See example below.
   * @example { key: "1", value: "Item 1" }
   * @type {KeyValuePairType}
   */
  value: KeyValuePairType;

  /**
   * @description The method that will be called when a value is selected. See example below.
   * @example (keyValuePair: KeyValuePairType) => setSelected(keyValuePair.value)
   * @type {(keyValuePair: KeyValuePairType) => void}
   */
  onSelect: (keyValuePair: KeyValuePairType) => void;

  // Optional props
  /**
   * @description What should be displayed when an item is selected. Defaults to value but will display the key if preferred.
   * @type {keyof KeyValuePairType}
   * @default 'value'
   * @example 'value'
   */
  shouldDisplayInComboBox?: keyof KeyValuePairType;

  /**
   * @description The placeholder text that will be displayed in the input field.
   * @type {string}
   * @default 'Search...'
   * @example 'Search items...'
   */
  inputPlaceholder?: string;

  /**
   * @description Callback method that will be triggered when the clear (X) button is pressed. If not provided, the 'X' button will only trigger animation.
   * @type {() => void}
   * @example () => setSelected(null)
   */
  onClear?: () => void;

  /**
   * @description What should be displayed when no items are found. Defaults to null but can be set to a string or a ReactNode.
   * @type {string | ReactNode}
   * @default null
   * @example 'No items found!'
   */
  fallbackOnNotFound?: string | ReactNode;

  /**
   * @description The display type of the combo box. Defaults to 'outline' but can be set to 'standard'.
   * @type {"outline" | "standard"}
   * @default 'outline'
   * @example 'standard'
   */
  display?: "outline" | "standard";

  /**
   * @description The theme object that will be used to override default styling. See type signature below and further examples in the docs.
   * @type {ThemeProp}
   * @example {
   *   labelStyle: {...styles};
   *   inputStyle: {...styles};
   *   comboStyle: {...styles};
   *   searchButtonStyle: {...styles};
   *   clearButtonStyle: {...styles};
   *   outerContainerStyle: {...styles};
   *   searchButtonIconSize: 24;
   *   clearButtonIconSize: 24;
   *   searchButtonIconColor: '#000';
   *   clearButtonIconColor: '#000';
   * }
   */
  theme?: ThemeProp

}
