import React, { createContext, type MutableRefObject, type ReactNode, useContext, useRef } from 'react';
import type { KeyValuePairType } from '../types/types';
import { Animated } from 'react-native';

export type VirtualizedComboContextProps = {
  data: MutableRefObject<ArrayLike<KeyValuePairType> | null>;
  heightAnim: Animated.Value,
  heightIn: () => void;
  heightOut: () => void;
}

export const VirtualizedComboContext = createContext<VirtualizedComboContextProps | null>(null);

export const useVirtualizedComboContext = () => useContext<VirtualizedComboContextProps>(VirtualizedComboContext as any);

export const VirtualizedComboProvider = ({ children }: { children: ReactNode }) => {
  const data = useRef<ArrayLike<KeyValuePairType>>(null);
  const heightAnim = useRef(new Animated.Value(0)).current;

  const heightIn = () => {
    Animated.timing(heightAnim, {
      toValue: 150,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const heightOut = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return <VirtualizedComboContext.Provider value={{
    data,
    heightAnim,
    heightIn,
    heightOut,
  }}>
    {children}
  </VirtualizedComboContext.Provider>;
};
