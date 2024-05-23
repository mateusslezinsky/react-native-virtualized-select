import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import VirtualizedCombo from 'react-native-virtualized-select';

const generatedArray = Array.from({ length: 10000 }, (_, i) => ({
  key: i.toString(),
  value: `Patient ${i.toString()}`,
}));

const initialValue = { key: '0', value: 'Patient 0' };

export default function App() {
  const [selectedPatient, setSelectedPatient] = useState<typeof initialValue>(initialValue);

  return (
    <View style={styles.container}>
      <VirtualizedCombo
        labelText="Select a patient"
        value={selectedPatient}
        onSelect={setSelectedPatient}
        data={generatedArray}
        inputPlaceholder="Search patients"
        onClear={() => setSelectedPatient(initialValue)}
        fallbackOnNotFound="No patients were found!"

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
