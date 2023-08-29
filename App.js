import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const App = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('80');
  const [activity, setActivity] = useState('2.0');
  const [calories, setCalories] = useState('');

  const calculateCalories = () => {
    const m = parseFloat(weight);
    const k = parseFloat(activity);
    if (!isNaN(m) && !isNaN(k)) {
      const calorieFormula =
        gender === 'male' ? (879 + 10.2 * m) * k : (795 + 7.18 * m) * k;
      setCalories(calorieFormula.toFixed(0));
    } else {
      setCalories('');
    }
  };

  const radioProps = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Weight</Text>
      <TextInput
        placeholder="Enter weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <Text style={styles.label}>Intensity</Text>
      <Picker
        selectedValue={activity}
        onValueChange={(itemValue) => setActivity(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Light" value="1.3" />
        <Picker.Item label="Usual" value="1.5" />
        <Picker.Item label="Moderate" value="1.7" />
        <Picker.Item label="Hard" value="2.0" />
        <Picker.Item label="Very Hard" value="2.2" />
      </Picker>
      <Text style={styles.label}>Gender</Text>
      <RadioForm
        radio_props={radioProps}
        initial={0}
        onPress={(value) => setGender(value)}
        formHorizontal={false}
        labelStyle={styles.radioLabel}
        buttonSize={10}
      />
      <Text style={styles.result}>{calories ? calories : ''}</Text>
      <Button title="CALCULATE" onPress={calculateCalories} />
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
  picker: {
    width: 200,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioLabel: {
    marginRight: 15,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default App;
