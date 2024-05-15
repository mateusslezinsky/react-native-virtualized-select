import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import VirtualizedCombo from 'react-native-virtualized-select';

const sampleTestValue = [
  {
    key: '1',
    value: 'First Value',
  },
  {
    key: '2',
    value: 'Second Value',
  },
  {
    key: "3",
    value: "Third Value"
  },
  {
    key: "4",
    value: "Fourth Value"
  }

];

export default function App() {
  return (
    <View style={styles.container}>
      <VirtualizedCombo
        labelText="Search patients"
        data={sampleTestValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
