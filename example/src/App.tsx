import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import VirtualizedCombo from 'react-native-virtualized-select';

const generatedArray = Array.from({ length: 10000 }, (_, i) => ({key: i.toString(), value: `Position ${i.toString()}`}) );


export default function App() {
  return (
    <View style={styles.container}>
      <VirtualizedCombo
        labelText="Search patients"
        data={generatedArray}
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
