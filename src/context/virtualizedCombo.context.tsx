import React, { createContext, type PropsWithChildren, useContext, useRef } from 'react';
import type { VirtualizedComboProps } from '../types/types';
import { Animated } from 'react-native';

export interface VirtualizedComboContextProps extends VirtualizedComboProps {
  heightAnim: Animated.Value,
  heightIn: () => void;
  heightOut: () => void;
}

export const VirtualizedComboContext = createContext<VirtualizedComboContextProps | null>(null);

export const useVirtualizedComboContext = () => useContext<Required<VirtualizedComboContextProps>>(VirtualizedComboContext as any);

export const VirtualizedComboProvider = ({ children, ...props }: PropsWithChildren<VirtualizedComboProps>) => {
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
    ...props,
    heightAnim,
    heightIn,
    heightOut,
  }}>
    {children}
  </VirtualizedComboContext.Provider>;
};
