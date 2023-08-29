import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [euros, setEuros] = useState('');
  const [pounds, setPounds] = useState('');

  const handleEurosChange = (text) => {
    const cleanedText = text.replace(',', '.');
    setEuros(cleanedText);
  };

  const calculatePounds = () => {
    const eurosAsNumber = parseFloat(euros);
    if (!isNaN(eurosAsNumber)) {
      const conversionRate = 0.91;
      const poundsResult = (eurosAsNumber * conversionRate).toFixed(2);
      setPounds(poundsResult);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Euros</Text>
      <TextInput
        placeholder="Enter euros"
        value={euros}
        onChangeText={handleEurosChange}
        keyboardType="decimal-pad"
        style={styles.input}
      />
      <Text style={styles.label}>Pounds</Text>
      <Text style={styles.result}>{pounds ? `${pounds} pounds` : ''}</Text>
      <Button title="CALCULATE" onPress={calculatePounds} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 100,
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default App;
